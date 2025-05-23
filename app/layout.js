import { Fugaz_One, Open_Sans, Sansita_Swashed } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "Tandem",
  description: "Side by side, even miles apart.",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-3 sm:p-8 flex items-center justify-between gap-4 pb-2 sm:pb-3">
      <Link href={"/"}>
        <div className="w-10 sm:w-12 h-auto flex flex-end gap-1">
          <img src="Tandem2.png" className="object-contain w-full"></img>
          <h1
            className={
              "text-3xl sm:text-4xl textGradientPrime " + sansita.className
            }
          >
            Tandem
          </h1>
        </div>
      </Link>
      <div className="flex items-center justify-between ">PLACEHOLDER</div>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center ">
      © MohammedMAmir | All Rights Reserved
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            `w-full max-w-[1000px] mx-auto text-sm sm:text-base 
            min-h-screen flex flex-col text-slate-800 ` + openSans.className
          }
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
