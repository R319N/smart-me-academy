import { Edu_SA_Hand } from "next/font/google";

const eduSaHand = Edu_SA_Hand({
  subsets: ["latin"],
  display: "swap",
});

export default function EduSaHandFontWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={eduSaHand.className}>{children}</div>;
}
