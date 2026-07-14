import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Food Safety Ambassadors Network (FoSAN)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "fosanlogo.svg"),
  );
  const logoSrc = `data:image/svg+xml;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #032964 0%, #016444 55%, #012a1c 100%)",
        }}
      >
        <img src={logoSrc} width={140} height={160} alt="" />
        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            Food Safety Ambassadors Network
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#f9c742",
              fontWeight: 600,
            }}
          >
            FoSAN — From farm to fork
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 22,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Science-based food safety education, awareness, and action across
            Nigeria.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
