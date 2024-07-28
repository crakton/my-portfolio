import Contact from "@/(components)/sections/contact";
import Intro from "@/(components)/sections/intro";
import Projects from "@/(components)/sections/projects";
import Skills from "@/(components)/sections/skills";
import Image from "next/image";

export default function Home() {
	return (
		<main className="w-[90%] bg-aurora-purple p-1 px-10 h-fit mx-auto">
			<Intro />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
