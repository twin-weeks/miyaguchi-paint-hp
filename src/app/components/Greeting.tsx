/* ─────────────────────────────────────────────────────────
   Greeting（Message / ごあいさつ）— SP起点 / モバイルファースト
   構造・数値・装飾配置は sjnkbs 採用サイト Message セクションを踏襲し、
   色・コピー・装飾素材のみ宮口塗装に置換（02_spec/Greeting_SP_完全リスト.md）。

   ★ Hero(FV) との違い（完全リスト §7-1）:
   - テキストは vw リキッドにしない。宮口の clamp() 方式を維持（段階的に頭打ち）。
   - 装飾だけ「SP=375vw ＋ bottom-* 底揃え ＋ overflow-x-clip はみ出し」、
     位置オフセット・電卓/deco 幅は固定px（完全リスト §2/§5 の値をそのまま流用）。

   井上さん確定（2026-06-10）:
   - SP でも背景装飾を全部出す（sjnkbs 準拠）
   - 見出し1「外壁塗装のプロとして」の SP を 18〜20 に縮小（sjnkbs 寄せ）
   - 本文は常に改行（sjnkbs 準拠）
   - 装飾対応: 赤ビル→青ビル / ピンクビル / 木大・木小 / 電卓+楕円→ローラー+楕円 /
     灰ドット→dot-gray / message-deco→宮口色替え版。CTAカード2枚は実装しない。

   ※ clamp の床ゾーン対策: whitespace-nowrap を使わず、最小幅(〜320px)でも
     1行が溢れない/折り返す設計（サブタイトルの床を 14px に）。
   ※ PC版（CTAカード・lg:2カラム）は GreetingPc.tsx に保持。App.tsx は本ファイルを使用。
   ───────────────────────────────────────────────────────── */
export default function Greeting() {
  return (
    <section id="greeting" className="relative bg-[var(--color-canvas)]">
      {/* はみ出しクリップ＋左右24px（弧/ビル群を画面外へ逃がす器）*/}
      <div className="overflow-x-clip px-6 pt-16 md:pt-24">
        {/* セクション本体（SP=1カラム）。装飾はこの relative 直下に absolute でばら撒く */}
        <div className="relative mx-auto max-w-[1224px] pb-[calc(62vw/375*100)] md:pb-[120px]">
          {/* ───── ① テキストブロック（z-10）───── */}
          <div className="relative z-10">
            {/* "Message" ラベル */}
            <p
              className="m-0 text-sm font-medium leading-[1.4] text-[var(--color-hero-accent)] md:text-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Message
            </p>

            {/* サブタイトル＋下線（nowrap なし・床14pxで320pxでも収まる）*/}
            <p className="mt-2 inline-block border-b-2 border-[var(--color-hero-accent)] pb-2 text-[clamp(14px,3.5vw,20px)] font-semibold leading-[1.4] text-[var(--color-hero-accent)]">
              三鷹・吉祥寺・田無で塗装ひと筋
            </p>

            {/* 見出し（小→大の2段。sjnkbs 構造に合わせ1つの <p> に2 span）*/}
            <p className="m-0 mt-6 font-semibold text-[var(--color-ink)] md:mt-8">
              {/* 見出し2：SP 32 → md 48（宮口現状維持＝sjnkbs 大と一致）*/}
              <span className="mt-2 block text-[clamp(32px,7vw,48px)] leading-[1.4]">
                地域に愛されて
                <br />
                40年の塗装屋です
              </span>
            </p>

            {/* 本文（常に改行＝sjnkbs 準拠。折返しテキストなので狭幅でも溢れない）*/}
            <p className="m-0 mt-4 text-[clamp(15px,2.2vw,18px)] font-medium leading-[2.4] text-[var(--color-ink)] md:mt-6">
              地域の皆様に選ばれ続けてきた理由。それは「10年後も変わらない美しさと耐久性」です。
              建物の状態や地域の環境を見極め、一塗り一塗りに魂を込める。
              私たちが培ってきた職人の技で、あなたの大切な住まいを守り抜きます。
            </p>

            {/* 装飾A：message-deco（左カラム基準の absolute・固定px）*/}
            {/* 宮口は _sp のみ保有のため img 1枚（PC版 _pc は後日）*/}
            <img
              src="/img/message-deco_sp.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[calc(26vw/375*100)] top-[24px] w-[67px] md:-right-24 md:w-[117px] lg:right-8"
            />
          </div>

          {/* ───── ② 装飾レイヤー（section直下にフラットに absolute・底揃えはみ出し）───── */}
          {/* #1 灰ドット（z-[2]：本文より前面）*/}
          <img
            src="/img/dot-gray.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-[450px] z-[2] w-3 md:right-[calc(240vw/1440*100)] md:top-[110px]"
          />

          {/* #2 青ビル群（大・右下スカイライン）← sjnkbs 赤ビル */}
          <img
            src="/img/ビルのイラスト.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-[-90px] w-[calc(335vw/375*100)] max-w-[806px] md:w-[calc(1075vw/1024*100)] xl:right-[-188px] xl:max-w-[1075px]"
          />

          {/* #3 ピンクビル群（左下スカイライン）*/}
          <img
            src="/img/message-bg-building-pink.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-34px] left-[-104px] w-[calc(206vw/375*100)] max-w-[564px] md:bottom-[-106px] md:w-[calc(752vw/1024*100)] xl:left-[-242px] xl:max-w-[662px]"
          />

          {/* #4 木・大 */}
          <img
            src="/img/木のイラスト.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-42px] right-[calc(6vw/375*100)] w-[calc(64vw/375*100)] max-w-[132px] md:bottom-[-62px] md:right-[calc(48vw/1440*100)] md:w-[calc(132vw/1440*100)]"
          />

          {/* #5 木・小 */}
          <img
            src="/img/message-tree-small.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-55px] right-[calc(76vw/375*100)] w-[calc(40vw/375*100)] max-w-[100px] md:bottom-[-76px] md:right-[calc(215vw/1440*100)] md:w-[calc(100vw/1440*100)]"
          />

          {/* #6 電卓＋楕円 → ローラー＋楕円（楕円台座の中央にローラーを重ねる・固定px）*/}
          <div className="pointer-events-none absolute bottom-[-118px] -left-20 w-[171px] md:bottom-[-205px] md:-left-40 md:w-[359px]">
            <img
              src="/img/roller-ellipse-bg.svg"
              alt=""
              aria-hidden="true"
              className="w-full"
            />
            <img
              src="/img/roller.png"
              alt=""
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 w-[52%] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
