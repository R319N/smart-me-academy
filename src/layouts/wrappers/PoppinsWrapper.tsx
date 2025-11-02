import { Exo, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const exo = Exo({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function PoppinsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={poppins.className}>{children}</div>;
}

export function ExoFontWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={exo.className}>{children}</div>;
}
