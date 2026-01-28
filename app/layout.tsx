import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "@/app/GUI/components/topNavBar";

export const metadata: Metadata = {
  title: "Jhohn Bennidict Estrella | Frontend Developer",
  description:
    "Portfolio of Jhohn Bennidict Estrella - Frontend Developer specializing in Next.js and React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
      </body>
    </html>
  );
}
