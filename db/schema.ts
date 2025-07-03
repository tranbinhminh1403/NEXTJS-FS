import { relations } from 'drizzle-orm';
import { int, mysqlTable, serial, varchar, timestamp } from 'drizzle-orm/mysql-core';

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


