import Image from "next/image";

export default function Loading() {
	return (
		<div className="h-1/2 w-1/2">
			<Image
				className="animate-pulse transition-all"
				fill
				priority
				src={"/logo.svg"}
				alt="Logo"
			/>
		</div>
	);
}
