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
        style={{ width: 520, left: -160, bottom: -300 }}
      />
      {/* 青系グレー弧（右上）← sjnkbs 灰弧 hero-arc-02.svg。SP値は同上の理由で右上ブリードに調整（プレビューで微調整） */}
      <img
        src="/img/hero-arc-02.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute z-0 max-w-none"
        style={{ width: 300, right: -90, top: -80 }}
      />

      {/* ===== 中央寄せラッパ（sjnkbs: relative mx-auto mb-8 max-w-[1280px] pt-10）===== */}
      <div className="relative mx-auto mb-8 max-w-[1280px] pt-10">
        {/* ① キャッチコピー（3行・"創業40年" だけ青グラデ）*/}
        <p className="relative z-[2] m-0 font-semibold leading-[1.3] text-[var(--color-ink)] text-[calc(28vw/375*100)] md:text-[calc(56vw/1440*100)] xl:text-[56px]">
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
        </p>

        {/* paint-underline（"確かな技術と実績" の下・独立配置 / プレビューで幅・位置を微調整）*/}
        <img
          src="/img/paint-underline.png"
          alt=""
          aria-hidden="true"
          className="relative z-[2] mt-1 max-w-none"
          style={{ width: "55%" }}
        />

        {/* ② メイン写真カード（静止画1枚 / 例外: width:80% + rotate:10deg / 後で Swiper 化可能なよう独立 div で包む）*/}
        <div
          className="relative left-1/2 mt-[-20px] w-[80%] -translate-x-1/2"
          style={{ rotate: "10deg" }}
        >
          <div
            className="overflow-hidden rounded-[8px]"
            style={{
              aspectRatio: "0.75",
              boxShadow: "4px 4px 32px 0 rgba(187, 165, 165, 0.3)",
            }}
          >
            <img
              src="/img/mv-carousel-01.jpg"
              alt="宮口塗装の施工現場の様子"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ③ ブランド名ブロック（右寄せ / 写真に重ねる）*/}
        <div className="relative z-[2] ml-auto -mt-5 w-fit">
          {/* サブラベル + 下線 */}
          <div className="w-fit">
            <p className="m-0 font-bold leading-[1.77] text-[var(--color-hero-accent)] text-[calc(12vw/375*100)] md:text-[calc(18vw/1440*100)] xl:text-[18px]">
              吉祥寺・三鷹・田無の塗装専門店
            </p>
            <div className="mt-1 h-px w-full bg-[var(--color-hero-accent)]" />
          </div>

          {/* 宮口塗装（H1相当の巨大文字 / sjnkbs ブランド大文字 48→96→96px）*/}
          <h1 className="m-0 font-semibold leading-[1.1] text-[var(--color-hero-brand)] text-[calc(48vw/375*100)] md:text-[calc(96vw/1440*100)] xl:text-[96px]">
            宮口塗装
          </h1>

          {/* MIYAGUCHI PAINT（英字 Montserrat / 宮口塗装に対し PC比 88/108 を踏襲し 39→78→78px）*/}
          <p
            className="m-0 text-right font-semibold leading-[1.1] text-[var(--color-hero-brand)] text-[calc(39vw/375*100)] md:text-[calc(78vw/1440*100)] xl:text-[78px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            MIYAGUCHI
            <br />
            PAINT
          </p>
        </div>

        {/* ④ Scroll インジケーター（SP左下 absolute / scroll-circle 素材なしのため枠線で代替）*/}
        <div className="absolute bottom-0 left-0 z-[3] flex w-fit flex-col items-center">
          <span
            className="text-sm font-medium leading-[1.3] text-[var(--color-hero-accent)]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Scroll
          </span>
          {/* 縦線 + 丸 + 外周リング */}
          <div className="relative mt-1 flex flex-col items-center pb-1">
            <span className="h-[33px] w-px rounded-sm bg-[var(--color-hero-accent)]" />
            <span className="relative mt-[-6px] flex size-[40px] items-center justify-center rounded-full border-[1.86px] border-[var(--color-surface-1)]">
              <span className="size-[10px] rounded-full bg-[var(--color-hero-accent)]" />
            </span>
          </div>
        </div>

        {/* ⑥ 装飾：浮遊アイコン ×4（後で motion ラップ可能なよう独立 div / SP座標 §7 SP@375）*/}
        {/* #0 青ハケ ← sjnkbs 赤鉛筆。left:0 / top:216px / w:70px */}
        <div
          className="absolute left-0 z-[2] top-[calc(216vw/375*100)] w-[calc(70vw/375*100)]"
        >
          <img src="/img/brush.png" alt="" aria-hidden="true" className="w-full max-w-none" />
        </div>

        {/* #1 屋根アイコン ← sjnkbs ピンクノートPC。right:-36px / top:350px / w:102px */}
        <div
          className="absolute z-[2] -right-[calc(36vw/375*100)] top-[calc(350vw/375*100)] w-[calc(102vw/375*100)]"
        >
          <img src="/img/Roof_Icon.png" alt="" aria-hidden="true" className="w-full max-w-none" />
        </div>

        {/* #2 paint-blue ← sjnkbs 書類アイコン。left:-16px / top:491px / w:78px */}
        <div
          className="absolute z-[2] -left-[calc(16vw/375*100)] top-[calc(491vw/375*100)] w-[calc(78vw/375*100)]"
        >
          <img src="/img/paint-blue.png" alt="" aria-hidden="true" className="w-full max-w-none" />
        </div>

        {/* #3 dot-blue ← sjnkbs 赤ドット。left:70px / top:578px / w:16px */}
        <div
          className="absolute z-[2] left-[calc(70vw/375*100)] top-[calc(578vw/375*100)] w-[calc(16vw/375*100)]"
        >
          <img src="/img/dot-blue.svg" alt="" aria-hidden="true" className="w-full max-w-none" />
        </div>
      </div>
    </section>
  );
}
