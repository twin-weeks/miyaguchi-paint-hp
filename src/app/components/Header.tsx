import { useState } from "react";
import { useScrolledPast } from "../hooks/useScrolledPast";

/* ─────────────────────────────────────────────────────────
   Header — 中央ロゴ型のブランディング帯（Figma実測を翻訳）
   ・<header sticky>：屋根アイコン + 「宮口塗装」(グレーグラデ文字
       linear-gradient(268deg,#858585,#484848) を background-clip:text)
       + サブタイトル。SPは中央寄せ / md+ は左寄せ + PC横ナビ。
     下辺は紺の1px線（var(--color-hero-accent)）。
     ※Figmaは Inter / rgba(0,0,0,0)（透明）/ 固定px だったが、
       漢字=Noto Sans JP・単色 ink・clamp() に翻訳して採用。
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
  /* SPで「最上部はハンバーガーだけ → 6割スクロールで帯＋ロゴ出現」用。
     md+（PC）は常時表示なので各クラスを md: で上書きして影響させない。*/
  const scrolled = useScrolledPast();

  return (
    <>
      {/* ===== ヘッダー本体（sticky・ロゴ + PC横ナビ）=====
          SP最上部: 背景透明・下線なし（Hero が透けて浮遊ハンバーガーだけ見える）。
          6割スクロール後: canvas 背景 + 紺の下線をフェードイン。*/}
      <header
        className={`fixed inset-x-0 top-0 z-[100] mx-auto w-full max-w-[430px] border-b transition-[background-color,border-color] duration-300 md:border-[color:var(--color-hero-accent)] md:bg-[var(--color-canvas)] ${
          scrolled
            ? "border-[color:var(--color-hero-accent)] bg-[var(--color-canvas)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className="mx-auto flex flex-col items-center gap-1 md:flex-row md:justify-between md:gap-0"
          style={{
            maxWidth: "var(--container-max)",
            padding: "var(--space-sm) var(--space-md)",
          }}
        >
          {/* ロゴ：屋根アイコン + 「宮口塗装」(グレーグラデ文字) + サブタイトル */}
          <a
            href="#"
            onClick={() => setOpen(false)}
            className={`flex flex-col items-center transition-opacity duration-300 md:pointer-events-auto md:items-start md:opacity-100 ${
              scrolled ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <span className="flex items-center gap-0">
              <img
                src="/img/Roof_Icon.png"
                alt=""
                aria-hidden="true"
                className="h-5 w-auto shrink-0"
              />
              <span
                className="text-[clamp(16px,4.8vw,18px)] font-semibold leading-none"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  backgroundImage:
                    "linear-gradient(268deg, #858585 24.4%, #484848 74.57%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                宮口塗装
              </span>
            </span>
            <span
              className="mt-1 text-[clamp(11px,3.2vw,12px)] font-semibold leading-[1.25]"
              style={{ color: "var(--color-ink)", letterSpacing: "-0.02em" }}
            >
              吉祥寺・三鷹・田無の塗装専門店
            </span>
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
        style={{
          backgroundColor: "#EEF2FB",
        }} /* ← 全画面ナビ背景は仮の淡青。参考は #FFEFEF（淡赤）*/
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

      {/* 開閉ボタン（丸・浮遊・最前面 z-[101]）
          SPロック：fixed 全幅→max-w-[430px] 中央ラッパ内に absolute right-4 で置くと、
          PC幅でもボタンが「430カラムの右端」に来る（画面右端に離れない）。
          ラッパは pointer-events-none、ボタンだけ pointer-events-auto で当たり判定を限定。*/}
      <div className="pointer-events-none fixed inset-x-0 top-8 z-[101] mx-auto max-w-[430px] md:hidden">
        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto absolute right-4 top-0 flex size-[56px] items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
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
                transform: open
                  ? "translateY(-7.5px) rotate(-45deg)"
                  : undefined,
              }}
            />
          </span>
        </button>
      </div>
    </>
  );
}
