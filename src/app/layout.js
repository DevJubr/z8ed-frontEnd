import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

export const metadata = {
  title: "Zayedur's Portfolio",
  description:
    "Creative graphic designer crafting visually captivating and innovative designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
