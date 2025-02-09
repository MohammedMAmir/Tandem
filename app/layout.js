import { Fugaz_One, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"], weight: ['400'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tandem",
  description: "Side by side, even miles apart.",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={'textGradient text-base sm:text-lg ' + fugaz.className}>Tandem</h1>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 ">
      footer
    </footer>
  )

  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base 
          min-h-screen flex flex-col text-slate-800`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
