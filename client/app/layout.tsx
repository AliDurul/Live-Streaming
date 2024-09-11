import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Analytics } from "@vercel/analytics/react"
import dynamic from "next/dynamic";
const ToastProvider = dynamic(() => import("./layoutComponents/ToastProvider"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discovering | StreamLink",
  description: "Created By Ali Durul",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  const session = await auth();

  return (
    <html lang="en" >
      <body className={inter.className} >
        <ToastProvider>
          <SessionProvider session={session} >
            {children}
            <Analytics />
          </SessionProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
