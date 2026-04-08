import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean as mysqlBoolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Properties table — stores all real estate listings.
 */
export const properties = mysqlTable("properties", {
  id: int("id").autoincrement().primaryKey(),
  /** Property type: house, apartment, land, commercial, etc. */
  type: mysqlEnum("type", ["house", "apartment", "land", "commercial", "other"]).notNull().default("house"),
  /** Transaction type */
  transactionType: mysqlEnum("transactionType", ["sale", "rent"]).notNull().default("sale"),
  /** Title in 3 languages */
  titleEs: varchar("titleEs", { length: 255 }).notNull(),
  titleCa: varchar("titleCa", { length: 255 }).notNull(),
  titleEn: varchar("titleEn", { length: 255 }).notNull(),
  /** Description in 3 languages */
  descriptionEs: text("descriptionEs"),
  descriptionCa: text("descriptionCa"),
  descriptionEn: text("descriptionEn"),
  /** Location */
  location: varchar("location", { length: 255 }).notNull(),
  /** Price in EUR (stored as string for flexibility with "Consultar") */
  price: varchar("price", { length: 50 }).notNull(),
  /** Property features */
  bedrooms: int("bedrooms").default(0),
  bathrooms: int("bathrooms").default(0),
  area: int("area").default(0),
  /** Extra area (patio, garden, etc.) */
  extraArea: int("extraArea").default(0),
  extraAreaLabel: varchar("extraAreaLabel", { length: 50 }),
  /** Tag: featured, exclusive, new */
  tag: mysqlEnum("tag", ["featured", "exclusive", "new"]).default("new"),
  /** Whether the property is visible on the website */
  isActive: int("isActive").notNull().default(1),
  /** Sort order (lower = first) */
  sortOrder: int("sortOrder").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Property = typeof properties.$inferSelect;
export type InsertProperty = typeof properties.$inferInsert;

/**
 * Property images table — multiple images per property.
 */
export const propertyImages = mysqlTable("property_images", {
  id: int("id").autoincrement().primaryKey(),
  propertyId: int("propertyId").notNull(),
  /** CDN URL of the image */
  url: varchar("url", { length: 500 }).notNull(),
  /** Sort order within the property gallery */
  sortOrder: int("sortOrder").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PropertyImage = typeof propertyImages.$inferSelect;
export type InsertPropertyImage = typeof propertyImages.$inferInsert;
