import type { Metadata } from "next";
import localFont from "next/font/local";
import {Roboto} from "next/font/google"
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import HeaderCompo from "@/components/header";



const roboto = Roboto ({ weight:'400',subsets:['latin']})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ATI - Kurunegala",
  description: "Exam apply application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
       className={roboto.className}
      >
        <HeaderCompo />
        <main>
        {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
