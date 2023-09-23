import "./globals.css";
import { pixeloid } from "./pixeloidFont";

export const metadata = {
  title: "Pixel Coins",
  description: "Collect all the coins!",
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${pixeloid.className} font-sans`}>{children}</body>
    </html>
  );
}
