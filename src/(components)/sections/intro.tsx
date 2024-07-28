import Image from "next/image";

export default function Intro() {
	return (
		<section id="intro" className="grid md:grid-cols-5 h-screen text-star">
			<div className="col-span-3 leading-7 break-words text-justify space-y-3">
				<h1 className="text-3xl mb-3 p-3 border-b border-b-aurora-blue">
					Intro
				</h1>
				<p>
					{`I'm a passionate Nigerian software engineer specializing in web and
					mobile development. With expertise in JavaScript, TypeScript, React,
					Flutter, Next.js, and Nest.js, I craft robust, user-centric
					applications that make a real impact.`}
				</p>

				<p>
					{`My journey spans from freelance projects exceeding client expectations
					to open-source contributions that showcase my commitment to the tech
					community. Currently pursuing a Bachelor's in Mechatronics and Systems
					Engineering, I'm constantly pushing the boundaries of my knowledge.`}
				</p>

				<p>
					{`Beyond the world of code, I'm an avid anime enthusiast, a basketball
					player, and a language learner. This diverse range of interests fuels
					my creativity and allows me to bring unique perspectives to every
					project I undertake.`}
				</p>
			</div>
			<div className="col-span-2 mx-auto justify-self-center">
				<div className="rounded-full w-52 h-52 relative md:top-16 overflow-hidden">
					<Image
						src={"/images/me.jpg"}
						alt="logo"
						width={300}
						height={300}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
		</section>
	);
}
