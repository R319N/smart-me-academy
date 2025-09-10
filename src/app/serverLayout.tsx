import * as React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "gene 20",
    default: "Gene 20 - Crafting Exceptional Digital Experiences",
  },
};

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Crafting Exceptional Digital Experiences with Wilfred Reign</title>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        `}</style>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}