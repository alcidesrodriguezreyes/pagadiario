import { NextRequest, NextResponse } from "next/server";
import * as schema from "@/db/schema";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";

type Params = {
    clienteId: number;
};

export const GET = async (request: NextRequest, context: { params: Params }) => {
    const { clienteId } = context.params;

    const [result] = await db.select()
        .from(schema.cliente)
        .where(eq(schema.cliente.identificacion, clienteId));

    return NextResponse.json({ result });
};
