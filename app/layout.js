// import { Urbanist } from "next/font/google";
import { Montserrat, Monda } from "next/font/google";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "/public/assets/css/style.css";
import "../public/assets/css/style.css";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

const monda = Monda({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-monda",
  display: "swap",
});

export const metadata = {
  title: "Zylivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${monda.variable} `}>
        {children}
      </body>
    </html>
  );
}
