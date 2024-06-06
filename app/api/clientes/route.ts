import { NextResponse, NextRequest } from "next/server";
import * as schema from "@/db/schema";
import { db } from "@/db/db";
import { asc } from "drizzle-orm";

type Params = {
    offset?: number;
    limit?: number;
};

export const GET = async (request: NextRequest, context: { params: Params }) => {
    const { offset, limit } = context?.params || {};

    const result = await db.select()
        .from(schema.cliente)
        .orderBy(asc(schema.cliente.nombre))
        .limit(limit || 10)
        .offset(offset || 0);

    return NextResponse.json({ result });
}
