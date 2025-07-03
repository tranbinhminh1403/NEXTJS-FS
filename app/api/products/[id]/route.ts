import { db } from "@/db/config";
import { products, categories } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  try {
    const result = await db
      .select({
        productId: products.productId,
        productName: products.productName,
        price: products.price,
        stock: products.stock,
        img: products.img,
        discount: products.discount,
        specs: products.specs,
        createdAt: products.createdAt,
        categoryName: categories.categoryName,
      })
      .from(products)
      .where(eq(products.productId, Number(id)))
      .leftJoin(categories, eq(products.categoryId, categories.categoryId));
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
