import type { Metadata } from "next";
import { DM_Mono, Farsan, Jomolhari } from "next/font/google";
import "./globals.css";
import AppProvider from "@/contexts/app";

// const dm = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"] });
// const farsan = Farsan({ subsets: ["latin"], weight: ["400"] });
const jomol = Jomolhari({ subsets: ["latin"], weight: ["400"] });
export const metadata: Metadata = {
	title: "Redemption",
	description: "My portfolio created with Nextjs",
	creator: "Redemption Jonathan",
	applicationName: "MyPortfolio",
	icons: "/logo.svg",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${jomol.className}`}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
