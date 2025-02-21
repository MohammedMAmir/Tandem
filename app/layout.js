import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"], weight: ['400'],
});

export const metadata = {
  title: "Tandem",
  description: "Side by side, even miles apart.",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={'textGradientPrime text-base sm:text-2xl ' + fugaz.className}>Tandem</h1>
      <div className="flex items-center justify-between ">
      PLACEHOLDER
      </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center ">
      © MohammedMAmir | All Rights Reserved
    </footer>
  )

  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base 
          min-h-screen flex flex-col text-slate-800 ` + openSans.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
