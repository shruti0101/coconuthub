import { Poetsen_One, Poppins, Noto_Serif } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SmoothScroll from "@/components/SmoothScroll";
import Whatsapp from "@/components/Landingpage/Whatsapp";

// Heading Font
const poetsen = Poetsen_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poetsen",
  display: "swap",
});

// Paragraph Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

// Noto Serif (added)
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata = {
  title: "Dates Supplier | Khajoor Supplier | Vishal Enterprise",
  description:
    "Vishal Enterprise is a trusted dates supplier and khajoor supplier offering premium quality fresh and dry dates for wholesale and bulk orders.",
  icons: {
    icon: "/loggo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poetsen.variable} ${poppins.variable} ${notoSerif.variable} antialiased`}>
        <LayoutWrapper>
          <Whatsapp></Whatsapp>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LayoutWrapper>
      </body>
    </html>
  );
}