import { ImageResponse } from "next/og"
import { business } from "@content/business"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1c1f22",
          color: "#f6f4f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#f2a71b", fontWeight: 700, letterSpacing: 2 }}>WASHINGTON, DC</div>
        <div style={{ fontSize: 56, fontWeight: 700, marginTop: 20, maxWidth: 900 }}>
          Auto Glass Repair — Clear Help When You Need It
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#c9ccd1" }}>{business.brand.value}</div>
      </div>
    ),
    size,
  )
}
