import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saturn Client",
  description: "The best open source Minecraft client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
