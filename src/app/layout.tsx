import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/layout/Layout";
import GlobalStyle from "@/styles/global";
import Providers from "@/redux/provider";
import "next-cloudinary/dist/cld-video-player.css";

// // Register the "en" locale.
// TimeAgo.addDefaultLocale(en);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanseek",
  description: "Korean food shorts Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
