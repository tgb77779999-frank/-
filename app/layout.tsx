import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小芽探險學院",
  description: "四年級學科複習與獎勵學習 App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
