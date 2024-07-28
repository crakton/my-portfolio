"use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
	title: "404 Error Page",
	description: "Nothing to see here",
};

export default function NotFound() {
	return (
		<html>
			<body>
				<main className="relative min-h-screen bg-gradient-to-br from-[#010a3d] p-24 via-[#040203] to-[#010a3d] flex-col content-center items-center justify-center text-star">
					<div className="mb-40">
						<h1 className="text-6xl font-bold text-red-500">
							<strong className="text-hint">404</strong>{" "}
							<span className="animate-ping">ERROR</span>
						</h1>
					</div>
					<div className="self-end">
						<p className="text-xl shadow-hint">Uncharted Route!</p>
						<span>Return back to</span>{" "}
						<Link
							className="text-xs bg-aurora-purple p-1 rounded-md"
							href={"/"}
						>
							127.0.0.1
						</Link>
					</div>

					<div className="absolute left-0 bottom-0">
						<Image
							className="h-1/2 w-1/2"
							src={"/ship-drive.svg"}
							alt={"Spaceship"}
							width={100}
							height={100}
						/>
					</div>
				</main>
			</body>
		</html>
	);
}
