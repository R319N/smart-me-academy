"use client";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import gene20DarkTheme from '@/utils/darkTheme/gene20DarkTheme'


export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html>
      <head>
        <title>Smart Me Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
      >
        <AppRouterCacheProvider options={{ key: "css" }} {...props}>
          <ThemeProvider theme={gene20DarkTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>

  );
}
