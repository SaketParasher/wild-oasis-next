import "@/app/_styles/globals.css"
import { Josefin_Sans } from "next/font/google"

import Header from "@/app/_components/Header";


const Josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "The Wild Oasis"
  },
  description: "Luxurious Hotel Cabins in the Woods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen
          ${Josefin.className} flex flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
