import { Inter } from "next/font/google"; // Import Inter instead of Geist
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {Toaster} from "@/components/ui/toaster";

// Set up Inter font
const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

export const metadata = {
    title: "FINAVIA - Structurer. Digitaliser. Automatiser.",
    description: "Cabinet d'expertise en conseil financier",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className="scroll-smooth">
        {/* Apply the inter class to the body */}
        <body className={`${inter.className} antialiased min-h-screen bg-white`} suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Toaster/>
        <Footer/>
        </body>
        </html>
    );
}