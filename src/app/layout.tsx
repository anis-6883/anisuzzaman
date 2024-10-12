import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Anisuzzaman",
  description:
    "I'm a MERN Stack Developer specializing in building dynamic, responsive web applications with MongoDB, Express, React, and Node.js. Explore my projects, skills, and experience in full-stack development. Let's work together to bring your ideas to life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
