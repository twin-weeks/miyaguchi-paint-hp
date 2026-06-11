/* ─────────────────────────────────────────────────────────
   FixedFooterCta — 画面下固定の CTA バー（SP起点）
   ・外側 = 画面下に常駐する固定の背景バー（薄グレー）
   ・内側 = 角丸の独立ボタン2つ（電話=オレンジ / WEB=ブルー）
     各ボタンは「白枠バッジ（補足）＋メイン文字」の2要素構成、
     下辺の濃い色 + active:translate で押し込みエフェクト。
   ・幅は固定pxを使わず flex-1 で等分（リキッド）。
   ※ 本文がバーに隠れないよう App 側で末尾にスペーサーを置く。
   ───────────────────────────────────────────────────────── */
export default function FixedFooterCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 px-2 py-2 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]"
      style={{ backgroundColor: "rgba(85, 85, 85, 0.5)" }}
    >
      {/* 電話（オレンジ） */}
      <a
        href="tel:08052224440"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-white border-b-4 transition-all duration-150 active:translate-y-0.5 active:border-b-2"
        style={{
          backgroundColor: "var(--color-cta-orange)",
          borderColor: "var(--color-cta-orange-dark)",
        }}
      >
        <span
          className="flex shrink-0 flex-col items-center justify-center rounded-md bg-white px-2 py-1 leading-none"
          style={{ color: "var(--color-cta-orange)" }}
        >
          <span className="text-[clamp(14px,3.8vw,18px)] font-black">
            365<span className="text-[clamp(9px,2.4vw,12px)] font-bold">日</span>
          </span>
          <span className="mt-0.5 text-[clamp(9px,2.4vw,12px)] font-bold">対応</span>
        </span>
        <span className="flex flex-col items-center leading-none">
          <span className="text-[clamp(10px,2.8vw,13px)] font-bold tracking-wide">無料</span>
          <span className="mt-1 text-[clamp(17px,4.6vw,22px)] font-black tracking-wide">電話相談</span>
        </span>
      </a>

      {/* WEB見積（ブルー） */}
      <a
        href="#contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-white border-b-4 transition-all duration-150 active:translate-y-0.5 active:border-b-2"
        style={{
          backgroundColor: "var(--color-cta-blue)",
          borderColor: "var(--color-cta-blue-dark)",
        }}
      >
        <span
          className="flex shrink-0 flex-col items-center justify-center rounded-md bg-white px-2 py-1 leading-none"
          style={{ color: "var(--color-cta-blue-dark)" }}
        >
          <span className="text-[clamp(9px,2.4vw,12px)] font-bold tracking-wide">かんたん</span>
          <span className="mt-0.5 text-[clamp(14px,3.8vw,18px)] font-black">
            1<span className="text-[clamp(9px,2.4vw,12px)] font-bold">分</span>
          </span>
        </span>
        <span className="flex flex-col items-center leading-none">
          <span className="text-[clamp(10px,2.8vw,13px)] font-bold tracking-wide">WEBから</span>
          <span className="mt-1 text-[clamp(17px,4.6vw,22px)] font-black tracking-wide">無料見積</span>
        </span>
      </a>
    </div>
  );
}
