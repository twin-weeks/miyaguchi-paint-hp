/* ─────────────────────────────────────────────────────────
   FixedFooterCta — 画面下固定の CTA バー（SP起点）
   Greeting / ヘッダーから撤去した CTA をここに集約。
   左: 電話 / 右: WEB お問い合わせ の2分割。
   ※ 本文がバーに隠れないよう App 側で末尾にスペーサーを置く。
   ───────────────────────────────────────────────────────── */
export default function FixedFooterCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[var(--color-hairline)] bg-[var(--color-canvas)] shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      {/* 電話 */}
      <a
        href="tel:08052224440"
        className="flex items-center justify-center gap-2 py-3 text-white"
        style={{ backgroundColor: "var(--color-primary-dark)" }}
      >
        <img src="/img/phone.png" alt="" aria-hidden="true" className="h-6 w-auto" />
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] font-normal opacity-90">お電話はこちら</span>
          <span
            className="text-lg font-semibold"
            style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "-0.02em" }}
          >
            080-5222-4440
          </span>
        </span>
      </a>

      {/* WEB お問い合わせ */}
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 py-3 text-center text-base font-semibold text-white"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        WEBでお問い合わせ
      </a>
    </div>
  );
}
