import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, adminProcedure } from "./_core/trpc";
import { z } from "zod";
import {
  getActiveProperties,
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  addPropertyImage,
  deletePropertyImage,
  reorderPropertyImages,
} from "./db";
import { storagePut } from "./storage";
import { nanoid } from "nanoid";

const propertyInput = z.object({
  type: z.enum(["house", "apartment", "land", "commercial", "other"]),
  transactionType: z.enum(["sale", "rent"]),
  titleEs: z.string().min(1),
  titleCa: z.string().min(1),
  titleEn: z.string().min(1),
  descriptionEs: z.string().optional().nullable(),
  descriptionCa: z.string().optional().nullable(),
  descriptionEn: z.string().optional().nullable(),
  location: z.string().min(1),
  price: z.string().min(1),
  bedrooms: z.number().int().min(0).default(0),
  bathrooms: z.number().int().min(0).default(0),
  area: z.number().int().min(0).default(0),
  extraArea: z.number().int().min(0).default(0),
  extraAreaLabel: z.string().optional().nullable(),
  tag: z.enum(["featured", "exclusive", "new"]).default("new"),
  isActive: z.number().int().min(0).max(1).default(1),
  sortOrder: z.number().int().default(0),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  properties: router({
    /** Public: get all active properties with images */
    listActive: publicProcedure.query(async () => {
      return await getActiveProperties();
    }),

    /** Admin: get all properties (including inactive) */
    listAll: adminProcedure.query(async () => {
      return await getAllProperties();
    }),

    /** Admin: get a single property by ID */
    getById: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await getPropertyById(input.id);
      }),

    /** Admin: create a new property */
    create: adminProcedure
      .input(propertyInput)
      .mutation(async ({ input }) => {
        const id = await createProperty(input);
        return { id };
      }),

    /** Admin: update a property */
    update: adminProcedure
      .input(z.object({ id: z.number(), data: propertyInput.partial() }))
      .mutation(async ({ input }) => {
        await updateProperty(input.id, input.data);
        return { success: true };
      }),

    /** Admin: delete a property */
    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deleteProperty(input.id);
        return { success: true };
      }),

    /** Admin: toggle property active status */
    toggleActive: adminProcedure
      .input(z.object({ id: z.number(), isActive: z.number().int().min(0).max(1) }))
      .mutation(async ({ input }) => {
        await updateProperty(input.id, { isActive: input.isActive });
        return { success: true };
      }),

    /** Admin: upload an image for a property */
    uploadImage: adminProcedure
      .input(z.object({
        propertyId: z.number(),
        base64: z.string(),
        filename: z.string(),
        contentType: z.string().default("image/jpeg"),
      }))
      .mutation(async ({ input }) => {
        const buffer = Buffer.from(input.base64, "base64");
        const key = `properties/${input.propertyId}/${nanoid()}-${input.filename}`;
        const { url } = await storagePut(key, buffer, input.contentType);
        
        // Get current max sortOrder for this property
        const prop = await getPropertyById(input.propertyId);
        const maxSort = prop?.images?.length ?? 0;
        
        await addPropertyImage({
          propertyId: input.propertyId,
          url,
          sortOrder: maxSort,
        });
        return { url };
      }),

    /** Admin: add image by URL (for CDN images already uploaded) */
    addImageUrl: adminProcedure
      .input(z.object({
        propertyId: z.number(),
        url: z.string().url(),
      }))
      .mutation(async ({ input }) => {
        const prop = await getPropertyById(input.propertyId);
        const maxSort = prop?.images?.length ?? 0;
        await addPropertyImage({
          propertyId: input.propertyId,
          url: input.url,
          sortOrder: maxSort,
        });
        return { success: true };
      }),

    /** Admin: delete an image */
    deleteImage: adminProcedure
      .input(z.object({ imageId: z.number() }))
      .mutation(async ({ input }) => {
        await deletePropertyImage(input.imageId);
        return { success: true };
      }),

    /** Admin: reorder images */
    reorderImages: adminProcedure
      .input(z.object({
        propertyId: z.number(),
        imageIds: z.array(z.number()),
      }))
      .mutation(async ({ input }) => {
        await reorderPropertyImages(input.propertyId, input.imageIds);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
