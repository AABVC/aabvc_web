/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "AABVC project";
export const contentType = "image/png";

export default async function OG() {
  // Font
  const interSemiBold = await fetch(
    new URL("./fonts/Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #bde1ff 75%)",
        }}
      >
        <img
          src={new URL(
            "../public/aabvc.png",
            import.meta.url
          ).toString()}
          alt="Aab VC Logo"
          tw="w-full h-full mb-0 opacity-95"
        />
       
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
        },
      ],
    }
  );
}
