"use client";
import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { planetVariants } from "@/utils/motion";
interface GlowingIconButtonProps {
  bottomText: string,
  upperText: string
}

const GlowingIconButton: React.FC<GlowingIconButtonProps> = ({ bottomText, upperText }) => {
  return (
    <motion.div variants={planetVariants("right")}>
      {/* <Link href={href}> */}

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundImage: `linear-gradient(45deg, #449DD130 0%, #9A48D030 100%)`,
          // border: "1px solid #DEC5E350",
          backdropFilter: "blur(7px)",
          zIndex: 2,
          position: "relative",
          height: "300px",
          width: "220px",
        }}
      >
        <Box
          style={{
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `linear-gradient(45deg, #449DD130 0%, #9A48D030 100%)`,
            // border: "1px solid #DEC5E350",
            backdropFilter: "blur(7px)",
            zIndex: 2,
            position: "relative",
            height: "160px",
            width: "160px",
          }}
        >
          {/* Glow Effects */}
          <motion.div
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              position: "absolute",
              height: "96%",
              width: "96%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0) 60%, rgba(255,255,255,0.5) 100%)",
              zIndex: 1,
            }}
          />
          <motion.div
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              position: "absolute",
              // top: "-3px",
              // left: "-3px",
              height: "160px",
              width: "160px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0) 50%, rgba(255,255,255,0.3) 100%)",
              zIndex: 0,
            }}
          />
          {/* Rotating Top Arc Text */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "160px",
              height: "160px",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            <svg viewBox="0 0 160 160" width="160" height="160">
              <path
                id="topArc"
                d="M 80,80 m -55,0 a 55,55 0 0,1 110,0"
                fill="none"
                stroke="none"
              />
              <text fontSize="18" fill="#716679" fontFamily="Arial" letterSpacing="1.5" fontVariant="all-small-caps">
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                  {upperText}
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Rotating Bottom Arc Text (Same Direction & Speed) */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "160px",
              height: "160px",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            <svg viewBox="0 0 160 160" width="160" height="160">
              <path
                id="bottomArc"
                d="M 80,80 m -65,0 a 65,65 0 0,0 130,0"
                fill="none"
                stroke="none"
              />
              <text fontSize="18" fill="#DEC5E3" fontFamily="Arial" letterSpacing="1.5" fontVariant="all-small-caps">
                <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
                  {/* view my gallery . */}
                  {bottomText}
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Glowing Icon Center */}
          <Box
            sx={{
              borderRadius: "50%",
              height: "60px",
              width: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `linear-gradient(45deg,rgba(68, 157, 209, 0.49) 0%,rgba(154, 72, 208, 0.5) 100%)`,
              border: "1px solid #DEC5E350",
              backdropFilter: "blur(7px)",
              zIndex: 2,
              ...styles.scaleHover
            }}
          >
            <img
              src="arrow.svg"
              alt="arrow"
              style={{
                height: "32px",
                width: "32px",
                zIndex: 3,
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* </Link > */}
    </motion.div>
  );
};

export default GlowingIconButton;
