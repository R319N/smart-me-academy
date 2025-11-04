// app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button, Paper } from "@mui/material";
import ServerLayout from "./serverLayout";
import RootLayout from "./layout";

export default function NotFound() {
  const router = useRouter();

  return (
    <ServerLayout>
      <RootLayout>
        <Paper
          sx={{
            minHeight: "100vh",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: "0",
            margin: 0,
            bgcolor: "#E6E4CE",
          }}
        >
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold text-gray-800"
            >
              404
            </motion.h1>

            <p className="mt-4 text-lg text-gray-600">
              Oops! The page you’re looking for doesn’t exist.
            </p>

            <Button
              onClick={() => router.push("/")}
              className="mt-6"
            >
              Go back home
            </Button>
          </div>
        </Paper>
      </RootLayout>
    </ServerLayout>
  );
}
