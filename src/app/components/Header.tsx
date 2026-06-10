import { useState } from "react";

/* ─────────────────────────────────────────────────────────
   Header — sjnkbs 参考サイトの「作り」を踏襲
   ・<header sticky>：ロゴ（左）＋ PC横ナビ（md+, SPは hidden）
   ・ハンバーガー：ヘッダーとは別の body直下 浮遊丸ボタン
       fixed right-4 top-20 size-[56px] rounded-full md:hidden
       背景 #2C2EBA / 3本線はシルバーグラデ #F3F3F3→#B1B1B1（Figma実測）
   ・オーバーレイ bg-black/40 ＋ 全画面ナビ（fixed inset-0, md:hidden）
   ※ 色・コピーは宮口独自（参考サイトの赤は移植しない）
   ───────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#works", label: "施工実績" },
  { href: "#about", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

/* 3本線のシルバーグラデ（Figma: 線形グラデーション #F3F3F3 → #B1B1B1）*/
const BAR_GRADIENT = "linear-gradient(180deg, #F3F3F3 0%, #B1B1B1 100%)";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== ヘッダー本体（sticky・ロゴ + PC横ナビ）===== */}
      <header
        className="sticky left-0 top-0 z-[100] w-full border-b border-[var(--color-hairline)] bg-[var(--color-canvas)]"
        style={{ height: 56 }}
      >
        <div
          className="mx-auto flex h-full items-center justify-between"
          style={{ maxWidth: "var(--container-max)", padding: "0 var(--space-md)" }}
        >
          <a href="#" className="flex items-center" onClick={() => setOpen(false)}>
            <img src="/img/logo.png" alt="宮口塗装" className="h-10" />
          </a>

          {/* PC専用：横並びグローバルナビ（SPは全画面ナビへ格納）*/}
          <nav
            className="hidden items-center gap-6 text-sm font-medium md:flex"
            style={{ color: "var(--color-ink)" }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:opacity-70">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== SP専用ハンバーガー（body直下・fixed・md:hidden）===== */}
      {/* オーバーレイ */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[99] bg-black/40 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* 全画面ナビ */}
      <nav
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-2 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ backgroundColor: "#EEF2FB" }} /* ← 全画面ナビ背景は仮の淡青。参考は #FFEFEF（淡赤）*/
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="w-[72%] max-w-[320px] border-b border-[var(--color-hairline)] py-5 text-center text-lg font-medium text-[var(--color-ink)]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* 開閉ボタン（丸・浮遊・最前面 z-[101]）*/}
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed right-4 top-20 z-[101] flex size-[56px] items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)] md:hidden"
        style={{ backgroundColor: "#2C2EBA" }}
      >
        <span className="relative flex h-[18px] w-6 flex-col items-center justify-between">
          <span
            className="block h-[3px] w-full rounded-full transition-transform duration-200"
            style={{
              background: BAR_GRADIENT,
              transform: open ? "translateY(7.5px) rotate(45deg)" : undefined,
            }}
          />
          <span
            className="block h-[3px] w-full rounded-full transition-opacity duration-200"
            style={{ background: BAR_GRADIENT, opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[3px] w-full rounded-full transition-transform duration-200"
            style={{
              background: BAR_GRADIENT,
              transform: open ? "translateY(-7.5px) rotate(-45deg)" : undefined,
            }}
          />
        </span>
      </button>
    </>
  );
}
