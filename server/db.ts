import { eq, desc, asc, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, properties, propertyImages, InsertProperty, InsertPropertyImage, Property, PropertyImage } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/* ── Property Queries ── */

/** Get all active properties with their images (for public frontend) */
export async function getActiveProperties() {
  const db = await getDb();
  if (!db) return [];

  const props = await db.select().from(properties)
    .where(eq(properties.isActive, 1))
    .orderBy(asc(properties.sortOrder));

  const images = await db.select().from(propertyImages)
    .orderBy(asc(propertyImages.sortOrder));

  return props.map(p => ({
    ...p,
    images: images.filter(img => img.propertyId === p.id),
  }));
}

/** Get all properties (for admin panel, including inactive) */
export async function getAllProperties() {
  const db = await getDb();
  if (!db) return [];

  const props = await db.select().from(properties)
    .orderBy(asc(properties.sortOrder));

  const images = await db.select().from(propertyImages)
    .orderBy(asc(propertyImages.sortOrder));

  return props.map(p => ({
    ...p,
    images: images.filter(img => img.propertyId === p.id),
  }));
}

/** Get a single property by ID with images */
export async function getPropertyById(id: number) {
  const db = await getDb();
  if (!db) return null;

  const props = await db.select().from(properties).where(eq(properties.id, id)).limit(1);
  if (props.length === 0) return null;

  const images = await db.select().from(propertyImages)
    .where(eq(propertyImages.propertyId, id))
    .orderBy(asc(propertyImages.sortOrder));

  return { ...props[0], images };
}

/** Create a new property */
export async function createProperty(data: InsertProperty) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(properties).values(data);
  const insertId = result[0].insertId;
  return insertId;
}

/** Update a property */
export async function updateProperty(id: number, data: Partial<InsertProperty>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(properties).set(data).where(eq(properties.id, id));
}

/** Delete a property and its images */
export async function deleteProperty(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.delete(propertyImages).where(eq(propertyImages.propertyId, id));
  await db.delete(properties).where(eq(properties.id, id));
}

/** Add an image to a property */
export async function addPropertyImage(data: InsertPropertyImage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(propertyImages).values(data);
}

/** Delete a property image */
export async function deletePropertyImage(imageId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.delete(propertyImages).where(eq(propertyImages.id, imageId));
}

/** Reorder property images */
export async function reorderPropertyImages(propertyId: number, imageIds: number[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  for (let i = 0; i < imageIds.length; i++) {
    await db.update(propertyImages)
      .set({ sortOrder: i })
      .where(eq(propertyImages.id, imageIds[i]));
  }
}
