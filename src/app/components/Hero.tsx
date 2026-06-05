export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-canvas)",
        paddingTop: 24,
        paddingBottom: 40,
      }}
    >
      {/* Background: Blue arc (bottom-left) */}
      <img
        src="/img/hero-arc-01.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1094,
          height: 1283,
          left: -80,
          bottom: -856,
          pointerEvents: "none",
          maxWidth: "none",
        }}
      />

      {/* Background: Gray arc (upper-right) */}
      <img
        src="/img/hero-arc-02.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 704,
          height: 784,
          right: -120,
          top: -120,
          pointerEvents: "none",
          maxWidth: "none",
        }}
      />

      {/* Content container (1440px centered, matches Figma artboard) */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          position: "relative",
          height: 740,
        }}
      >
        {/* ── Photo cards (2 overlapping, rotated) ── */}
        <div
          style={{
            position: "absolute",
            left: 312,
            top: -18,
            width: 700,
            height: 678,
          }}
        >
          {/* Back card */}
          <div
            className="overflow-hidden"
            style={{
              position: "absolute",
              left: 113,
              top: 38,
              width: 454,
              height: 604,
              transform: "rotate(4deg)",
              transformOrigin: "top left",
              boxShadow: "4px 8px 4px rgba(165, 168, 187, 0.30)",
              borderRadius: 8,
            }}
          >
            <img
              src="/img/mv-carousel-02.jpg"
              alt="施工現場の様子"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Front card */}
          <div
            className="overflow-hidden"
            style={{
              position: "absolute",
              left: 192,
              top: 38,
              width: 480,
              height: 640,
              transform: "rotate(8deg)",
              transformOrigin: "top left",
              boxShadow: "0px 4px 8px 4px rgba(165, 168, 187, 0.20)",
              borderRadius: 8,
            }}
          >
            <img
              src="/img/mv-carousel-01.jpg"
              alt="職人の作業風景"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Paint underline decoration */}
        <img
          src="/img/paint-underline.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 558,
            height: 32,
            left: 525,
            top: 320,
            transform: "rotate(180deg)",
            transformOrigin: "top left",
            maxWidth: "none",
          }}
        />
        {/* ── Catch copy ── */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 8,
            width: 553,
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 80,
            paddingBottom: 80,
          }}
        >
          <h1
            style={{
              fontSize: 56,
              fontWeight: 600,
              lineHeight: "78px",
              textShadow: "0px 4px 4px rgba(255, 255, 255, 0.25)",
              margin: 0,
            }}
          >
            <span style={{ color: "var(--color-hero-accent)" }}>創業40年</span>
            <span style={{ color: "var(--color-ink)" }}>
              の
              <br />
              街の塗装屋
              <br />
              確かな技術と実績
            </span>
          </h1>
        </div>

        {/* ── Roof icon ── */}
        <img
          src="/img/Roof_Icon.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 204,
            height: 93,
            left: 1186,
            top: 82,
            maxWidth: "none",
          }}
        />

        {/* ── Paint white splash (background for company name block) ── */}
        <img
          src="/img/paint-wh.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 360,
            left: 800,
            top: 136,
            maxWidth: "none",
          }}
        />

        {/* ── Company name block ── */}
        <div
          style={{
            position: "absolute",
            left: 908,
            top: 240,
            width: 536,
          }}
        >
          {/* Subtitle + underline */}
          <div style={{ paddingLeft: 12, paddingRight: 12 }}>
            <p
              style={{
                fontSize: 28,
                fontWeight: 700,
                lineHeight: "32px",
                color: "var(--color-hero-accent)",
                textShadow: "0px 1px 1px rgba(255, 255, 255, 0.25)",
                margin: 0,
              }}
            >
              吉祥寺・三鷹・田無の塗装専門店
            </p>
            <div
              style={{
                width: 417,
                height: 1,
                backgroundColor: "var(--color-hero-accent)",
                marginTop: 4,
              }}
            />
          </div>

          {/* 宮口塗装 */}
          <p
            style={{
              fontSize: 108,
              fontWeight: 600,
              lineHeight: "120px",
              color: "var(--color-hero-brand)",
              margin: 0,
              marginTop: 8,
            }}
          >
            宮口塗装
          </p>

          {/* MIYAGUCHI PAINT */}
          <div style={{ paddingLeft: 4, paddingRight: 4 }}>
            <p
              style={{
                fontSize: 88,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                lineHeight: "88px",
                color: "var(--color-hero-brand)",
                margin: 0,
              }}
            >
              MIYAGUCHI
              <br />
              PAINT
            </p>
          </div>
        </div>

        {/* ── Decorative: blue gradient dot ── */}
        <img
          src="/img/dot-blue.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 41,
            height: 41,
            left: 1424,
            top: 248,
          }}
        />

        {/* ── Brush icon ── */}
        <img
          src="/img/brush.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 149,
            height: 198,
            left: 81,
            top: 480,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            maxWidth: "none",
          }}
        />

        {/* ── Paint blue splash ── */}
        <img
          src="/img/paint-blue.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 153,
            left: 176,
            top: 424,
            transformOrigin: "top left",
            maxWidth: "none",
          }}
        />

        {/* ── Scroll indicator ── */}
        <div
          style={{
            position: "absolute",
            left: 36,
            top: 656,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              lineHeight: "18.2px",
              color: "var(--color-hero-accent)",
            }}
          >
            Scroll
          </span>

          {/* Circle + dot */}
          <div
            style={{
              position: "relative",
              width: 39,
              height: 39,
              marginTop: 4,
            }}
          >
            <div
              className="rounded-full"
              style={{
                position: "absolute",
                inset: 0.93,
                border: "1.86px solid var(--color-surface-1)",
              }}
            />
            <div
              className="rounded-full"
              style={{
                position: "absolute",
                width: 10,
                height: 10,
                left: 14.5,
                top: 14.5,
                backgroundColor: "var(--color-hero-accent)",
              }}
            />
          </div>

          {/* Vertical line */}
          <div
            style={{
              width: 1,
              height: 33,
              backgroundColor: "var(--color-hero-accent)",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
}
