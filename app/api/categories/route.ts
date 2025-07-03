import { db } from "@/db/config";
import { categories } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await db.select({
            categoryId: categories.categoryId,
            categoryName: categories.categoryName,
        }).from(categories);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}