"use client";
import useSWR from "swr";
import Image from "next/image";
import { fetcher } from "@/lib/fetcher";
import Card from "@/components/Card";
import { Note } from "@/lib/types";

export default function Home() {
	const { data: notes, isLoading } = useSWR("/api/testing", fetcher);

	return (
		<main className="mt-10">
			<section className="flex flex-col md:flex-row gap-6">
				{!isLoading &&
					notes.data.map((note: Note) => <Card key={note.id} {...note} />)}
			</section>
		</main>
	);
}
