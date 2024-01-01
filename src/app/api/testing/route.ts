import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export async function GET() {
	const data = await prisma.categories.findMany({
		orderBy: {
			created_at: "desc",
		},
	});
	console.log(data);
	return Response.json({ data: data }, { status: 200 });
}

export async function POST() {
	await prisma.categories.create({
		data: {
			name: "",
		},
	});
	return Response.json({ status: 200 });
}
