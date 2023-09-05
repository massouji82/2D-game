import localFont from "next/font/local";

export const pixeloid = localFont({
  src: [
    {
      path: "../../public/fonts/PixeloidMono.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/PixeloidSans.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/PixeloidSansBold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-pixeloid",
});
