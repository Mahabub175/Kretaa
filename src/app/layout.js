import { Bricolage_Grotesque, Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import GlobalProvider from "@/provider/GlobalProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-hind",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind",
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Kretaa",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolage.variable} ${hindSiliguri.variable}  antialiased`}
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
