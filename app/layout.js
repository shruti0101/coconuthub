import { Poetsen_One, Poppins, Noto_Serif } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: " Paper Cup Making Machines Manufacturer |  Paper Cup Production Machines",
  description:
    "Leading manufacturer of paper cup making machines in India. Offering durable, high-performance, and fully automatic machines for paper cup production. Contact us for bulk orders and customization.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poetsen.variable} ${poppins.variable} ${notoSerif.variable} antialiased`}>
        <LayoutWrapper>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LayoutWrapper>
      </body>
    </html>
  );
}