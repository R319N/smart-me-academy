import * as React from "react";
import type { Metadata } from "next";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: {
    template: "Smart Me Academy",
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
        <title>Smart Me Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
      // className={roboto.className}
      >{children}</body>
    </html>
  );
}