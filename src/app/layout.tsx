import "./globals.css";
import { pixeloid } from "./pixeloid";

export const metadata = {
  title: "Phaser Game",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${pixeloid.className} font-sans`}>{children}</body>
    </html>
  );
}
