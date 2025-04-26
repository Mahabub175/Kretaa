import { Bricolage_Grotesque, Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import GlobalProvider from "@/provider/GlobalProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import SEOHead from "@/components/Shared/SEOHead";

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
  description: "Complete E-Commerce Solution",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <SEOHead />
      <GoogleTagManager gtmId="GTM-WWP6CP2W" />
      <body
        className={`${inter.variable} ${bricolage.variable} ${hindSiliguri.variable}  antialiased`}
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
