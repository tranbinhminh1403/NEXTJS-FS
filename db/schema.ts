import { relations } from 'drizzle-orm';
import { int, mysqlTable, serial, varchar, timestamp, text, boolean } from 'drizzle-orm/mysql-core';

export const products = mysqlTable('products', {
  productId: serial('product_id').primaryKey(),
  categoryId: int('category_id').notNull(),
  productName: varchar('product_name', { length: 255 }).notNull(),
  price: int('price').notNull(),
  stock: int('stock').notNull(),
  img: varchar('img', { length: 255 }).notNull(),
  discount: int('discount').notNull(),
  specs: varchar('specs', { length: 1000 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const categories = mysqlTable('categories', {
  categoryId: serial('category_id').primaryKey(),
  categoryName: varchar('category_name', { length: 255 }).notNull(),
});

//relation
export const productsRelations = relations(products, 
    ({one}) => ({
        categories: one(categories, {
            fields: [products.categoryId],
            references: [categories.categoryId],
        })
    })
);

export const categoriesRelations = relations(categories, 
    ({many}) => ({
        products: many(products)
    })
);

//better auth gen
export const user = mysqlTable("user", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = mysqlTable("session", {
  id: varchar("id", { length: 36 }).primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: varchar("token", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = mysqlTable("account", {
  id: varchar("id", { length: 36 }).primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = mysqlTable("verification", {
  id: varchar("id", { length: 36 }).primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});
