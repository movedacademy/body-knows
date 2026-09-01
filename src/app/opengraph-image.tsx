import { ImageResponse } from "next/og";

export const alt = "BODY KNOWS — Movement. Breath. Transformation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#28352D",
          color: "#F7F6F2",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 10,
            textTransform: "uppercase",
          }}
        >
          BODY KNOWS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 900,
            }}
          >
            Movement. Breath. Transformation.
          </div>
          <div style={{ fontSize: 28, fontStyle: "italic", opacity: 0.85 }}>
            Your body knows things your mind hasn’t figured out yet.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
