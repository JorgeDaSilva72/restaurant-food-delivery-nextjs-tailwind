import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notification from "../components/Notification";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Food Delivery",
  description: "Best Pizzas of the town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Notification />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
