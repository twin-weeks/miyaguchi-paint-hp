import React from "react";

export default function Greeting() {
  return (
    <section
      id="greeting"
      className="relative overflow-x-clip bg-[var(--color-canvas)]"
    >
      {/* ── Background decoration layer (1440px container と同期。絶対座標の起点を本文コンテナと揃える) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div className="relative mx-auto h-full" style={{ maxWidth: 1440 }}>
          {/* Blue buildings (right side, large) */}
          <img
            src="/img/ビルのイラスト.png"
            alt=""
            className="absolute max-w-none"
            style={{ width: 1075, height: 581, right: -16, top: 184 }}
          />
          {/* Pink buildings (left-center, behind text) */}
          <img
            src="/img/message-bg-building-pink.png"
            alt=""
            className="absolute -bottom-36 max-w-none"
            style={{ width: 662, height: 372, left: -80, bottom: -104 }}
          />

          {/* Trees (right-bottom) */}
          <img
            src="/img/木のイラスト.png"
            alt=""
            className="absolute bottom-0 max-w-none"
            style={{ width: 132, height: 131, right: 250 }}
          />
          <img
            src="/img/message-tree-small.png"
            alt=""
            className="absolute bottom-0 max-w-none"
            style={{ width: 100, height: 100, right: 385 }}
          />

          {/* Roller (left-bottom) */}
          <div
            className="absolute -bottom-88 -left-24"
            style={{ width: 359, height: 294 }}
          >
            <img
              src="/img/roller-ellipse-bg.svg"
              alt=""
              className="absolute inset-0 h-full w-full"
            />
            <img
              src="/img/roller.png"
              alt=""
              className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
              style={{ width: 180, height: 180 }}
            />
          </div>
        </div>
      </div>

      {/* ── Content container (CSS Grid：マクロ骨格は2カラム) ── */}
      <div
        className="
          relative mx-auto
          grid grid-cols-1 items-start gap-12
          px-6 py-16
          md:px-10 md:py-24
          lg:grid-cols-[1fr_1fr] lg:gap-[clamp(48px,8vw,200px)]
          lg:py-[120px] lg:pb-[100px] lg:px-8 lg:pt-[0px]
        "
        style={{ maxWidth: 1440 }}
      >
        {/* Decorative dots (PC only, container relative) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          <div
            className="absolute rounded-[2px]"
            style={{
              width: 13,
              height: 13,
              right: 600,
              top: 120,
              background: "linear-gradient(180deg, #7C9AED 0%, #2D51BA 100%)",
            }}
          />
          <div
            className="absolute rounded-[2px] border-4"
            style={{
              width: 26,
              height: 26,
              right: 660,
              top: 217,
              borderColor: "var(--color-surface-1)",
            }}
          />
          <div
            className="absolute rounded-[2px]"
            style={{
              width: 16,
              height: 16,
              right: 645,
              top: 341,
              background: "linear-gradient(180deg, #7C9AED 0%, #2D51BA 100%)",
            }}
          />
        </div>

        {/* ── Left: Text content ── */}
        <div className="relative z-10 flex flex-col gap-2">
          {/* "Message" label */}
          <p
            className="m-0 font-medium leading-7 text-[var(--color-hero-accent)]"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: 20 }}
          >
            Message
          </p>

          {/* Subtitle with underline */}
          <div
            className="inline-flex self-start border-b-2 pb-2"
            style={{ borderColor: "var(--color-hero-accent)" }}
          >
            <p className="m-0 whitespace-nowrap text-[clamp(16px,3.5vw,20px)] font-normal leading-7 text-[var(--color-hero-accent)]">
              お客様とのご縁を一番に大切にしています
            </p>
          </div>

          {/* Heading line 1 */}
          <p
            className="m-0 text-[clamp(24px,5vw,32px)] font-semibold leading-[1.4] text-[var(--color-ink)]"
            style={{ textWrap: "balance" }}
          >
            外壁塗装のプロとして
          </p>

          {/* Heading line 2 */}
          <p className="m-0 whitespace-nowrap text-[clamp(32px,7vw,48px)] font-semibold leading-[1.4] text-[var(--color-ink)]">
            実直に塗り続けます
          </p>

          {/* Body text */}
          <p className="m-0 mt-2 text-[clamp(15px,2.2vw,18px)] font-medium leading-[2.4] text-[var(--color-ink)]">
            三鷹・吉祥寺・田無で、外壁と屋根の塗装ひと筋に40年。
            <br className="hidden md:inline" />
            チラシも飛び込み営業もせず、
            <br className="hidden md:inline" />
            塗らせていただいたお家の方が次のお客様を紹介してくださる。
            <br className="hidden md:inline" />
            それだけで続いてきた塗装屋です。
          </p>
        </div>

        {/* ── Right: CTA cards (Grid 2D 配置で staircase) ── */}
        <div
          className="
            relative z-20
            grid grid-cols-1 justify-items-center gap-6
            lg:grid-cols-[424px_1fr_424px] lg:grid-rows-2 lg:gap-y-3 lg:justify-items-stretch
            lg:translate-y-12
          "
        >
          <WebCtaCard className="mx-auto lg:col-start-3 lg:row-start-1 lg:mx-0 lg:-translate-x-24" />
          <PhoneCtaCard className="mx-auto lg:col-start-1 lg:row-start-2 lg:mx-0 lg:translate-y-4" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Shared CTA Card shell
   Figma 仕様：424×144 / padding 32 0 28 0 / gap 13 / border 1px #285588
   ───────────────────────────────────────────────────────── */
function CtaCard({
  label,
  className = "",
  children,
}: React.PropsWithChildren<{ label: string; className?: string }>) {
  return (
    <div className={`relative w-full max-w-[424px] ${className}`}>
      {/* Floating label + paint underline */}
      <div className="absolute -top-[24px] left-1/2 z-10 -translate-x-1/2 bg-white">
        <div className="relative px-3">
          <img
            src="/img/paint-underline.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 max-w-none -translate-x-1/2 rotate-180"
            style={{ width: 396 }}
          />
          <p className="relative m-0 whitespace-nowrap text-center text-[clamp(18px,3vw,24px)] font-normal leading-[1.6] text-[var(--color-ink)]">
            {label}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div
        className="flex min-h-36 flex-col items-center justify-center gap-[13px] rounded-lg border bg-white px-0 pt-6 pb-5"
        style={{
          borderColor: "#285588",
          boxShadow: "8px 12px 0px rgba(0, 0, 0, 0.90)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   CTA Card (WEB) — Figma 上は上段
   ───────────────────────────────────────────────────────── */
function WebCtaCard({ className }: { className?: string }) {
  return (
    <CtaCard label="＼ WEBからお問い合わせ ／" className={className}>
      {/* TODO: CTAテキストはFigmaプレースホルダー。実際の文言確定後に差し替え */}
      <a
        href="#contact"
        className="
          mx-6 flex items-center justify-center gap-1
          rounded-full px-10 py-2
          text-center text-white
          transition-colors
          hover:bg-[color-mix(in_oklch,#E51726_85%,black)]
          focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-hero-accent)]
        "
        style={{ backgroundColor: "#E51726" }}
      >
        <span className="text-[clamp(18px,3vw,24px)] font-semibold leading-[1.6]">
          CTAテキスト
        </span>
      </a>

      {/* TODO: マイクロコピーはFigmaプレースホルダー。実際の文言確定後に差し替え */}
      <p className="m-0 text-center text-[clamp(16px,2.5vw,20px)] font-bold leading-tight text-[var(--color-ink)]">
        マイクロコピーマイクロコピー
      </p>
    </CtaCard>
  );
}

/* ─────────────────────────────────────────────────────────
   CTA Card (Phone) — Figma 上は下段
   ───────────────────────────────────────────────────────── */
function PhoneCtaCard({ className }: { className?: string }) {
  return (
    <CtaCard label="＼ お電話でのお問い合わせ ／" className={className}>
      <a
        href="tel:08052224440"
        className="flex items-center justify-center gap-1 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-hero-accent)]"
      >
        <img src="/img/phone.png" alt="" className="h-[53px] w-[39px]" />
        {/* 番号と受付を縦並びの右側ブロックに */}
        <div className="flex flex-col items-center">
          <span
            className="whitespace-nowrap text-center font-semibold"
            style={{
              color: "#004B93",
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(28px, 5vw, 44px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            080
            <span className="inline-block translate-y-[-0.1em]">-</span>
            5222
            <span className="inline-block translate-y-[-0.1em]">-</span>
            4440
          </span>
          <p className="m-0 mt-1 text-[clamp(14px,2vw,16px)] font-bold leading-tight text-[var(--color-ink)]">
            受付：9:00〜18:00（土日祝可）
          </p>
        </div>
      </a>
    </CtaCard>
  );
}
