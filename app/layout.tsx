import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Aurora from "@/components/ui/aurora";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "A visual collection of our most recent works - each piece crafted with intention, emotion and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    suppressHydrationWarning
      lang="en"
      className={`${geistSans.className} ${geistMono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col mx-auto max-w-275 bg-blue-950 text-white"> 
        <div>

        <header>
        <Header />
        </header>
        <main className="relative min-h-[90vh] overflow-hidden">
        <div className="relative z-10">
          {children}
        </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
      <Aurora
        colorStops={["#7cff67","#B497CF","#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
        </div>
      </main>

        <footer>
        <Footer />
        </footer>
        </div>
        </body>
    </html>
  );
}
