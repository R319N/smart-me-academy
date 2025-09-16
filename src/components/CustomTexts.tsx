import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

interface TypingTextProps {
  title: string; // The text to display with typing animation
  textStyles?: string; // Optional additional CSS styles for the text
}

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles || ""}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

interface TitleTextProps { 
  title: string; // The title text to display
  textStyles?: string; // Optional additional CSS styles for the title
}

export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.span
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles || ""}`}
  >
    {title}
  </motion.span>
);
