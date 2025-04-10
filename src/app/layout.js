import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import GlobalProvider from "@/provider/GlobalProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kretaa",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolage.variable} antialiased`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
