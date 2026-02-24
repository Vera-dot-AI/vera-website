import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
        }}
      >
        {/* Vera hexagonal logo mark — navy on white */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
            fill="#1B2B5B"
          />
          <text
            x="50"
            y="67"
            textAnchor="middle"
            fontSize="44"
            fontWeight="300"
            fontFamily="sans-serif"
            fill="#ffffff"
            letterSpacing="-1"
          >
            v
          </text>
        </svg>
      </div>
    ),
    { ...size }
  );
}
