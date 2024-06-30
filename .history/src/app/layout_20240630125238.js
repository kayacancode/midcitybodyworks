import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mid-City Body Works",
  description: "Mid-City Body Works offers professional auto body and paint repair, frame and unibody correction, theft restoration, painting and tape pin-striping, suspension repair, and glass replacement services in Memphis. Book your appointment today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
