import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./_comps/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SessionProvider } from "next-auth/react";

const mont = Montserrat({
  variable: "--font-mont-sans",
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A minimal, elegant blog platform for focused writing and effortless reading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        <html lang="en">
          <body className={`${mont.variable} antialiased`}>
            <Navbar></Navbar>
            {children}
          </body>
        </html>
      </SessionProvider>
    </ThemeProvider>
  );
}
