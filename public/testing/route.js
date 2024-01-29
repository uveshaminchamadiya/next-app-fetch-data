import { NextResponse } from "next/server"

export const GET = async (req) => {
    return NextResponse.json(
        { "msg": "testing this api" }
    )
}

export const POST = async (req) => {
    const result = await Data.create(newRecord);
    return result;
};


