"use client";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import gene20DarkTheme from '@/utils/darkTheme/gene20DarkTheme'


export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  useEffect(() => {
    const blankaFont = new FontFace("Blanka", "url(/fonts/Blanka.otf)");
    blankaFont.load().then(() => {
      document.fonts.add(blankaFont);
      document.querySelectorAll(".blanka-font").forEach((element) => {
        (element as HTMLElement).style.fontFamily = "Blanka, Arial, sans-serif";
      });
    });
  }, []);

  return (
    <AppRouterCacheProvider options={{ key: "css" }} {...props}>
      <ThemeProvider theme={gene20DarkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
