import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "James' Portfolio",
  description: "Take a look at my online portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="max-w mx-auto pt-5">
          <div className={`px-4`}><NavBar/></div>
          <div className="mt-8 pt-20">{children}</div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
