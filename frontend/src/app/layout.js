import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Playfair_Display} from "next/font/google"; 

const playfair_classic = Playfair_Display(
    {
        subsets: ['latin'],
        variable: '--font-playfair',
        display: 'swap',
        weight: ['400', '500', '600', '700', '800', '900'], // Specify the weights you want to use
        style: ['normal', 'italic']
    }
)

export const metadata = {
  title: "Phonix",
  description: "Your New Phone, A Tap Away",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
