"use client";

import { motion, useReducedMotion } from "motion/react";
import HeroPhotoCarousel from "./HeroPhotoCarousel";
import { entranceContainer, fadeUpItem, sweepInDeco } from "./Reveal";

/* ─────────────────────────────────────────────────────────
   Hero（FV） — SP起点 / モバイルファースト
   構造・数値・リキッドルールは sjnkbs 採用サイト FV を完全踏襲し、
   色・コピー・装飾素材のみ宮口塗装に置換（02_spec/sjnkbs_FV_完全リスト.md）。

   リキッドルール（3段）:
   - 無印クラス = SP（基準375）：font-size = N/375*100 vw = `text-[calc(Nvw/375*100)]`
   - md:（≥768）= 基準1440：`md:text-[calc(Nvw/1440*100)]`
   - xl:（≥1280）= px固定キャップ：`xl:text-[Npx]`
   - 写真カードは例外的に width:80% + rotate:10deg（vwではない）
   - 弧は overflow-x-clip 必須で画面外へ大きくはみ出させ一部だけ見せる
   - 装飾アイコンは absolute + top-[calc(Nvw/375*100)]（SP px = 式の分子そのまま）

   ※ 今回は SP のみ実装。PC スタイルは後から lg: で追加可能な構造。
   ※ アニメ/カルーセルは未実装。各装飾・写真は独立 div でラップ済み（後で motion / Swiper 化可能）。
   ※ PC版（1440px固定 absolute）は HeroPc.tsx に保持。
   ───────────────────────────────────────────────────────── */
export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="hero"
      className="relative overflow-x-clip bg-[var(--color-canvas)] px-6"
    >
      {/* ===== 背景の弧 ×2（画面外へはみ出させ一部だけ見せる / pointer-events-none）===== */}
      {/* 青弧（下〜左）← sjnkbs 赤弧 hero-arc-01.svg。SP値は素材が「巨大正円」でなく既製の弧のため、画面下左へブリードさせる値に調整（プレビューで微調整） */}
      <img
        src="/img/hero-arc-01.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute z-0 max-w-none"
        style={{
          width: `calc(1328vw/375*100)`,
          left: `calc(400vw/375*100)`,
          top: `calc(184vw/375*100)`,
          transform: `rotate(74deg)`,
          transformOrigin: "top left", // Figma の回転中心に合わせる
        }}
      />

      {/* 青系グレー弧（右上）← sjnkbs 灰弧 hero-arc-02.svg。SP値は同上の理由で右上ブリードに調整（プレビューで微調整） */}
      <img
        src="/img/hero-arc-02.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute z-0 max-w-none"
        style={{ width: 144, right: -24, top: -96 }}
      />

      {/* ===== 中央寄せラッパ（sjnkbs: relative mx-auto mb-8 max-w-[1280px] pt-10）=====
          登場アニメ: この div を stagger コンテナにし、子（コピー→写真→ブランド名→装飾）を順に出す */}
      <motion.div
        className="relative mx-auto mb-[calc(32vw/375*100)] max-w-[480px] pt-[calc(40vw/375*100)]"
        variants={entranceContainer}
        initial={reduce ? false : "hidden"}
        animate="show"
      >
        {/* ① キャッチコピー（3行・"創業40年" だけ青グラデ）*/}
        <motion.p
          variants={fadeUpItem}
          className="relative z-[2] m-0 font-semibold leading-[1.3] text-[var(--color-ink)] text-[calc(28vw/375*100)] md:text-[calc(56vw/1440*100)] xl:text-[56px]"
        >
          <span className="block">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #7C9AED 0%, #2C53BA 100%)",
              }}
            >
              創業40年
            </span>
            の
          </span>
          <span className="block">街の塗装屋</span>
          <span className="block">確かな技術と実績</span>
        </motion.p>

        {/* paint-underline（"確かな技術と実績" の下・独立配置 / プレビューで幅・位置を微調整）*/}
        <motion.img
          variants={fadeUpItem}
          src="/img/paint-underline.png"
          alt=""
          aria-hidden="true"
          className="relative z-[2] mt-1 max-w-none"
          style={{
            width: `calc(180vw/375*100)`,
          }} /* TD-5: 55% → calc 一貫化（@375で約180px） */
        />

        {/* ② メイン写真カルーセル（Swiper cards 風の自動回転積み / 実装は HeroPhotoCarousel.tsx・仕様 02_spec/sjnkbs_carousel.md）*/}
        <motion.div variants={fadeUpItem}>
          <HeroPhotoCarousel />
        </motion.div>

        {/* ③ ブランド名ブロック（右寄せ / 写真に重ねる）*/}
        <motion.div
          variants={fadeUpItem}
          className="relative z-[2] ml-auto -mt-[calc(20vw/375*100)] w-fit"
        >
          {/* サブラベル + 下線 */}
          <div className="w-fit">
            <p className="m-0 font-bold leading-[1.77] text-[var(--color-hero-accent)] text-[calc(12vw/375*100)] md:text-[calc(18vw/1440*100)] xl:text-[18px]">
              吉祥寺・三鷹・田無の塗装専門店
            </p>
            <div className="mt-[calc(4vw/375*100)] h-px w-full bg-[var(--color-hero-accent)]" />
          </div>

          {/* 宮口塗装（H1相当の巨大文字 / sjnkbs ブランド大文字 48→96→96px）*/}
          <h1 className="m-0 font-semibold leading-[1.1] text-[var(--color-hero-brand)] text-[calc(48vw/375*100)] md:text-[calc(96vw/1440*100)] xl:text-[96px]">
            宮口塗装
          </h1>

          {/* MIYAGUCHI PAINT（英字 Montserrat / 宮口塗装に対し PC比 88/108 を踏襲し 39→78→78px）*/}
          <p
            className="m-0 font-semibold leading-[1.1] text-[var(--color-hero-brand)] text-[calc(32vw/375*100)] md:text-[calc(78vw/1440*100)] xl:text-[78px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            MIYAGUCHI
            <br />
            PAINT
          </p>
        </motion.div>

        {/* ④ Scroll インジケーター（SP左下 absolute / circle-grey.svg 素材使用）*/}
        <div className="absolute bottom-0 left-0 z-[3] flex w-fit flex-col items-center">
          <span
            className="font-medium leading-[1.3] text-[var(--color-hero-accent)] text-[calc(14vw/375*100)]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Scroll
          </span>
          {/* 縦線 + 丸 + 外周リング（TD-6: 装飾UIの固定px → calc 一貫化 / scroll-anim: sjnkbs移植）*/}
          <div className="relative mt-[calc(4vw/375*100)] flex flex-col items-center pb-[calc(4vw/375*100)]">
            <span className="scrollbar-line-anim h-[calc(33vw/375*100)] w-px rounded-sm bg-[var(--color-hero-accent)]" />
            <div className="relative -mt-[calc(6vw/375*100)] size-[calc(40vw/375*100)]">
              <img
                src="/img/circle-grey.svg"
                alt=""
                aria-hidden="true"
                className="scrollbar-circle-anim absolute inset-0 size-[calc(40vw/375*100)]"
              />
              {/* 中央寄せはラッパ側 / 丸自身は scale アニメ専用（dot の transform 競合回避: spec §c）*/}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="scrollbar-dot-anim block size-[calc(10vw/375*100)] rounded-full bg-[var(--color-hero-accent)]" />
              </span>
            </div>
          </div>
        </div>

        {/* ⑥ 装飾：浮遊アイコン ×4（後で motion ラップ可能なよう独立 div / SP座標 §7 SP@375）*/}
        {/* #0 青ハケ ← sjnkbs 赤鉛筆。left:0 / top:216px / w:70px */}
        <motion.div
          variants={sweepInDeco}
          className="absolute left-0 z-[2] top-[calc(216vw/375*100)] w-[calc(56vw/375*100)]"
        >
          <img
            src="/img/brush.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-none"
          />
        </motion.div>

        {/* #1 屋根アイコン ← sjnkbs ピンクノートPC。right:-36px / top:350px / w:102px */}
        <motion.div
          variants={sweepInDeco}
          className="absolute z-[2] -right-[calc(16vw/375*100)] top-[calc(400vw/375*100)] w-[calc(120vw/375*100)]"
        >
          <img
            src="/img/Roof_Icon.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-none"
          />
        </motion.div>

        {/* #2 paint-blue ← sjnkbs 書類アイコン。left:-16px / top:491px / w:78px */}
        <motion.div
          variants={sweepInDeco}
          className="absolute z-[2] -left-[calc(4vw/375*100)] top-[calc(440vw/375*100)] w-[calc(56vw/375*100)]"
        >
          <img
            src="/img/paint-blue.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-none"
          />
        </motion.div>

        {/* #3 dot-blue ← sjnkbs 赤ドット。left:70px / top:578px / w:16px */}
        <motion.div
          variants={sweepInDeco}
          className="absolute z-[2] left-[calc(96vw/375*100)] top-[calc(540vw/375*100)] w-[calc(16vw/375*100)]"
        >
          <img
            src="/img/dot-blue.svg"
            alt=""
            aria-hidden="true"
            className="w-full max-w-none"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
