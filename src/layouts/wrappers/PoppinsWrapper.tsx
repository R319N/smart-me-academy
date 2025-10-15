import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PoppinsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={poppins.className}>{children}</div>;
}
