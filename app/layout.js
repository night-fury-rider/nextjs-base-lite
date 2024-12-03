import { ibmFont } from "@/app/fonts";
import "./globals.css";

export const metadata = {
  title: "Next.js App by Yuvraj Patil",
  description:
    "Light version of base repository for some quick coding practices with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmFont.className}`}>{children}</body>
    </html>
  );
}
