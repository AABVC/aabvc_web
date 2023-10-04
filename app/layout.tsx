import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAB VC",
  openGraph: {
    title: "AAB VC",
    description:
      "AAB VC is an independent private principal investor engaged in control investments in privately owned businesses with significant growth potential in Asia and beyond.",
    images: [
      {
        url: "https://nmusjgzqwtmrfcgxmxbm.supabase.co/storage/v1/object/public/aabc/AABVC-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAB VC",
    description:
      "AAB VC is an independent private principal investor engaged in control investments in privately owned businesses with significant growth potential in Asia and beyond.",
    images: ["https://nmusjgzqwtmrfcgxmxbm.supabase.co/storage/v1/object/public/aabc/AABVC-image.png"],
    creator: "@brian",
  },
  metadataBase: new URL("https://aabvc.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
