import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="xs:opacity-0 rounded-t-xl md:opacity-100 md:top-0 md:sticky text-sm items-center flex justify-center space-x-3 p-3 md:bg-aurora-black/45 w-[90%] mx-auto">
			<Link
				className="hover:font-bold hover:transition-all hover:shadow-orange-600"
				href={"/#intro"}
			>
				Intro
			</Link>
			<Link
				className="hover:font-bold hover:transition-all hover:shadow-orange-600"
				href={"/#skills"}
			>
				Skills
			</Link>
			<Link
				className="hover:font-bold hover:transition-all hover:shadow-orange-600"
				href={"/#projects"}
			>
				Projects
			</Link>
			<Link
				className="hover:font-bold hover:transition-all hover:shadow-orange-600"
				href={"/#contact"}
			>
				Contact Me
			</Link>
			<button className="p-2 bg-aurora-green/20 rounded-md">More...</button>
		</nav>
	);
}
