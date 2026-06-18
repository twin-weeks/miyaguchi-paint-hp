"use client";

import { motion, useReducedMotion } from "motion/react";
import HeroPhotoCarousel from "./HeroPhotoCarousel";
import { entranceContainer, fadeUpItem, sweepInDeco } from "./Reveal";

/* ─────────────────────────────────────────────────────────
   Hero（FV） — SP起点 / モバイルファースト
   構造・数値・リキッドルールは sjnkbs 採用サイト FV を完全踏襲し、
   色・コピー・装飾素材のみ宮口塗装に置換（02_spec/sjnkbs_FV_完全リスト.md）。

   リキッドルール（SPロック後 = cqw単層）:
   - 全クラス = SP（基準375）を cqw で：font-size = `text-[calc(Ncqw/375*100)]`
     ※ cqw は .app-shell（max-width:430・container-type:inline-size）の幅基準。
       画面でなく棚(430)を測るので PC幅でも430で頭打ち＝崩れない。
   - 旧 md:/xl: のPC予備値は撤去済（PCは HeroPc.tsx で作るため、このファイルには不要）。
   - 写真カードは例外的に width:80% + rotate:10deg（cqwではない）
   - 弧は overflow-x-clip 必須で画面外へ大きくはみ出させ一部だけ見せる
   - 装飾アイコンは absolute + top-[calc(Ncqw/375*100)]（SP px = 式の分子そのまま）

   ※ このファイルは SP専用（cqw単層）。PC は HeroPc.tsx を lg: で出し分ける（00_TODO「PC化TODO」）。
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
          width: `calc(1328cqw/375*100)`,
          left: `calc(400cqw/375*100)`,
          top: `calc(184cqw/375*100)`,
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
        className="relative mx-auto mb-[calc(32cqw/375*100)] max-w-[480px] pt-[calc(40cqw/375*100)]"
        variants={entranceContainer}
        initial={reduce ? false : "hidden"}
        animate="show"
      >
        {/* ① キャッチコピー（3行・"創業40年" だけ青グラデ）*/}
        <motion.p
          variants={fadeUpItem}
          className="relative z-[2] m-0 font-semibold leading-[1.3] text-[var(--color-ink)] text-[calc(28cqw/375*100)]"
        >
          {/* 上げツマミ: transform で視覚だけ上へ＝写真②は動かさない（フロー位置は元のまま）。
              マイナスを大きく→上へ。framer-motion と干渉しないようコピーを span で包んで掛ける */}
          <span
            className="block"
            style={{ transform: `translateY(calc(8cqw/375*100))` }}
          >
            <span className="block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(268deg, #877CED 24.4%, #362DBA 74.57%)" /* 色ツマミ（宮口塗装・MIYAGUCHIと同一グラデ）*/,
                }}
              >
                創業40年
              </span>
              の
            </span>
            {/* "確かな技術と実績" + paint-underline（下線）
              ・ずれ防止: 下線を span 直下に absolute・w-full で敷き、文字幅へ自動追従（旧: 幅180px決め打ちでずれていた）
              ・mask化: 画像を「型紙」として呼び出し、色は CSS トークンで塗る（≒ Photoshopのカラーオーバーレイ）*/}
            <span className="block">
              <span className="relative inline-block">
                {/* テキストを z-[1] で持ち上げ、マーカー(z-auto)の上に重ねる＝マーカーが文字の裏に回る（蛍光ペン式）*/}
                <span className="relative z-[1]">
                  確かな技術と実績
                  <br />
                </span>
                <motion.span
                  variants={fadeUpItem}
                  aria-hidden="true"
                  className="absolute left-[-12%] top-full block bg-[#FFFE8E] [mask-image:url(/img/paint-underline.png)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
                  style={{
                    width: `124%` /* 長さツマミ: 文字幅基準。105%で文字より長く / 80%で短く（横位置は className の left-0 側で調整）*/,
                    height: `calc(16cqw/375*100)` /* 太さツマミ */,
                    marginTop: `calc(-20cqw/375*100)` /* 縦位置ツマミ: マイナスで文字へ被せる / プラスで下へ離す（top-full基準）*/,
                  }} /* 色=bg-[#FFFE8E]（var(--color-hero-accent) や青グラデへ差し替え可）*/
                />
              </span>
            </span>
          </span>
        </motion.p>

        {/* ② メイン写真カルーセル（Swiper cards 風の自動回転積み / 実装は HeroPhotoCarousel.tsx・仕様 02_spec/sjnkbs_carousel.md）*/}
        <motion.div
          variants={fadeUpItem}
          className="mt-[calc(24cqw/375*100)]" /* 写真の下げツマミ: 数字↑で下へ（上に余白を足す）。フローなので下のブランド名③も一緒に下がる */
        >
          <HeroPhotoCarousel />
        </motion.div>

        {/* ③ ブランド名ブロック（右寄せ / 写真に重ねる）*/}
        <motion.div
          variants={fadeUpItem}
          className="relative z-[2] ml-auto -mt-[calc(4cqw/375*100)] w-fit"
        >
          {/* サブラベル + 下線 */}
          <div className="relative w-fit">
            {/* 白ハケ背景: サブラベルが写真に被って読めない問題の対策。
                黄マーカーと筆跡を揃えるため、同じ paint-underline.png を mask（型紙）として使い色だけ白で塗る。
                収め方も mask-size:100%_100%（伸縮）に統一（旧: paint-wh.png を object-cover でトリミングしていた）*/}
            <p className="relative z-[1] m-0 font-bold leading-[1.77] text-[var(--color-hero-accent)] text-[calc(12cqw/375*100)]">
              吉祥寺・三鷹・田無の
            </p>
            <div
              className="relative z-[1] mt-[calc(4cqw/375*100)] h-px w-full bg-[var(--color-hero-accent)]"
              style={{
                transform: `translateY(calc(-4cqw/375*100))` /* 吉祥寺へ近づけるツマミ: マイナスで上（近づく）。transformなので宮口塗装は動かない（mt は触らない=宮口塗装が連動するのはそっち）*/,
              }}
            />
          </div>

          {/* 宮口塗装（H1相当の巨大文字 / sjnkbs ブランド大文字 48→96→96px）
              色: グラデを文字でクリップ（bg-clip-text + text-transparent + style の backgroundImage）。①創業40年と同手法 */}
          <h1
            className="m-0 bg-clip-text font-bold leading-[1.1] text-transparent text-[calc(50cqw/375*100)]"
            style={{
              marginLeft: `calc(-5cqw/375*100)` /* 左右位置ツマミ: マイナスで左へ（MIYAGUCHI と左端を揃える微調整）。vw単位なのでSP幅でも崩れない */,
              backgroundImage:
                "linear-gradient(268deg, #877CED 24.4%, #362DBA 74.57%)" /* 色ツマミ */,
            }}
          >
            宮口塗装
          </h1>

          {/* MIYAGUCHI PAINT（英字 Montserrat / 宮口塗装に対し PC比 88/108 を踏襲し 39→78→78px）
              色: グラデを文字でクリップ（宮口塗装より少し青寄りのグラデ）*/}
          <p
            className="m-0 bg-clip-text font-bold leading-[1.1] text-transparent text-[calc(34cqw/375*100)]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              backgroundImage:
                "linear-gradient(268deg, #877CED 24.4%, #362DBA 74.57%)" /* 色ツマミ */,
            }}
          >
            MIYAGUCHI
            <br />
            PAINT
          </p>
        </motion.div>

        {/* ④ Scroll インジケーター（SP左下 absolute / circle-grey.svg 素材使用）*/}
        <div className="absolute bottom-0 left-0 z-[3] flex w-fit flex-col items-center">
          <span
            className="font-medium leading-[1.3] text-[var(--color-hero-accent)] text-[calc(14cqw/375*100)]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Scroll
          </span>
          {/* 縦線 + 丸 + 外周リング（TD-6: 装飾UIの固定px → calc 一貫化 / scroll-anim: sjnkbs移植）*/}
          <div className="relative mt-[calc(4cqw/375*100)] flex flex-col items-center pb-[calc(4cqw/375*100)]">
            <span className="scrollbar-line-anim h-[calc(33cqw/375*100)] w-px rounded-sm bg-[var(--color-hero-accent)]" />
            <div className="relative -mt-[calc(6cqw/375*100)] size-[calc(40cqw/375*100)]">
              <img
                src="/img/circle-grey.svg"
                alt=""
                aria-hidden="true"
                className="scrollbar-circle-anim absolute inset-0 size-[calc(40cqw/375*100)]"
              />
              {/* 中央寄せはラッパ側 / 丸自身は scale アニメ専用（dot の transform 競合回避: spec §c）*/}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="scrollbar-dot-anim block size-[calc(10cqw/375*100)] rounded-full bg-[var(--color-hero-accent)]" />
              </span>
            </div>
          </div>
        </div>

        {/* ⑥ 装飾：浮遊アイコン ×4（後で motion ラップ可能なよう独立 div / SP座標 §7 SP@375）*/}
        {/* #0 青ハケ ← sjnkbs 赤鉛筆。left:0 / top:216px / w:70px */}
        <motion.div
          variants={sweepInDeco}
          className="absolute left-0 z-[2] top-[calc(216cqw/375*100)] w-[calc(56cqw/375*100)]"
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
          className="absolute z-[2] -right-[calc(8cqw/375*100)] top-[calc(380cqw/375*100)] w-[calc(120cqw/375*100)]"
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
          className="absolute z-[2] -left-[calc(4cqw/375*100)] top-[calc(432cqw/375*100)] w-[calc(72cqw/375*100)]"
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
          className="absolute z-[2] left-[calc(76cqw/375*100)] top-[calc(532cqw/375*100)] w-[calc(16cqw/375*100)]"
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
