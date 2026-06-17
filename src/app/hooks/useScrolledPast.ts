import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────
   useScrolledPast — スクロール量が「viewport高 × ratio」を超えたら true。
   Header（ロゴ帯）と FixedFooterCta（下固定CTA）の「出現トリガー」を
   1つのしきい値で共有し、両者の出方を揃えるための小フック。
   ・ratio=0.6 ＝ ファーストビューを6割ほど見てから出す（iPhone SE基準）
   ・初回マウント時にも判定（途中スクロール位置でのリロード対策）

   ※ しきい値の高さ(thresholdH)はマウント時に一度だけ採寸して固定する。
      スマホはスクロールでアドレスバーが開閉し innerHeight が変動するため、
      毎回 innerHeight を読むとしきい値が動き「出てすぐ消える」チラつきになる。
      画面回転など“幅が変わった時だけ”採寸し直す（ツールバー開閉は幅不変＝無視）。
   ───────────────────────────────────────────────────────── */
export function useScrolledPast(ratio = 0.6): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    let thresholdH = window.innerHeight; // ← マウント時に1回だけ採寸して固定
    let lastWidth = window.innerWidth;

    const update = () => {
      setPassed(window.scrollY > thresholdH * ratio);
    };

    const onResize = () => {
      // 幅が変わった時だけ再採寸（=画面回転/ウィンドウリサイズ）。
      // モバイルのツールバー開閉は幅が変わらないので高さは据え置き＝チラつかない。
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        thresholdH = window.innerHeight;
      }
      update();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, [ratio]);

  return passed;
}
