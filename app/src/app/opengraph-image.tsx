import { ImageResponse } from "next/og";
import { LABS, MODELS, PROVIDERS } from "@/lib/catalog";

export const alt = "superhwy.net — An open-source database of Superintelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#060608",
          backgroundImage:
            "radial-gradient(ellipse 68% 42% at 88% -10%, rgba(255, 90, 95, 0.10), transparent 62%), radial-gradient(ellipse 58% 36% at 12% -8%, rgba(245, 158, 11, 0.06), transparent 58%)",
          color: "#f4f4f2",
          fontFamily: "sans-serif",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3 5.5H26L23 10.5H14.5L12.7 13.5H15.8L12.8 18.5H4.5L12.3 5.5Z"
                fill="#F4F4F2"
              />
              <path
                d="M19.7 26.5H6L9 21.5H17.5L19.3 18.5H16.2L19.2 13.5H27.5L19.7 26.5Z"
                fill="#A1A7B3"
              />
            </svg>
            <span
              style={{
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                color: "#f4f4f2",
              }}
            >
              superhwy.net
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              color: "#f4f4f2",
              maxWidth: "960px",
            }}
          >
            An open-source database of Superintelligence
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#8b909a",
              maxWidth: "820px",
              lineHeight: 1.4,
            }}
          >
            Model specs, modalities, pricing, and verified inference providers
            in one clean JSON API.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#8b909a",
          }}
        >
          <div style={{ display: "flex", gap: "36px" }}>
            <span>
              <strong style={{ color: "#f4f4f2" }}>{MODELS.length}</strong>{" "}
              Models
            </span>
            <span>
              <strong style={{ color: "#f4f4f2" }}>{PROVIDERS.length}</strong>{" "}
              Providers
            </span>
            <span>
              <strong style={{ color: "#f4f4f2" }}>{LABS.length}</strong> Labs
            </span>
          </div>
          <span style={{ color: "#14f1b2" }}>/api.json · /models.json · /api/v1/models</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
