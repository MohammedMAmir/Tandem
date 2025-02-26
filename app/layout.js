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
    <header className="p-3 sm:p-8 flex items-center justify-between gap-4">
      <div className="w-40 sm:w-60 h-auto flex items-center justify-center">
        <img src='tandem_text_light1.png' className="object-contain w-full"></img>
      </div>
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
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
