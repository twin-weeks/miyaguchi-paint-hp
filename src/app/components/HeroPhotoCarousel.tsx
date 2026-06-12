import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────
   Hero ② メイン写真カルーセル（Swiper "cards" 風の積み重ね）
   参考 sjnkbs 採用サイト FV を踏襲。仕様の正本 = 02_spec/sjnkbs_carousel.md
   ・動作: 自動回転のみ（3秒ごと・無限ループ・手動操作なし）← §0
   ・積み: active 0deg / 背面 -2deg・-100px・横ズレ … ← §4
   ・色/枠は宮口独自（ar0.75・r8px・影）

   ※ 実装メモ: 当初 useEmblaCarousel 案だったが、本カードは「ドラッグ無効の
     自動回転カード積み」。embla の水平トラック平行移動は absolute 重ね積みと
     競合し、2枚 loop の z 順序が崩れやすい（spec §6 が警告した "loop境界の手間"）。
     ドラッグを切った時点で embla の主機能は不要なため、§4 を忠実に出せる
     index-state + interval で実装（z順序・reduced-motion を完全制御）。
     embla は ③「実績の流れるスライド」(autoscroll) で本来の用途に使う。
   ───────────────────────────────────────────────────────── */

const SLIDES = [
  { src: "/img/mv-carousel-01.jpg", alt: "宮口塗装の施工現場の様子" },
  { src: "/img/mv-carousel-02.jpg", alt: "宮口塗装の職人による塗装作業" },
];

/* ── 傾き（傾き再調査 §7 ライブ実測で確定）──
   sjnkbs 実機 = コンテナ rotate 10°（=(b) スタック全体傾け）。
   土台10° + 内側 cards の相対回転(0 / -2 / -4°) → 画面上 front10° / 背面1 8° / 背面2 6°。
   本実装も同じ入れ子（このラッパの rotate + 各カードの rotateZ）で再現している。
   ※ 微調整ツマミとして残す（0 にすれば front 水平＝旧(a)案。実機準拠は 10）。 */
const BASE_TILT = 10; // deg（確定値）

/* ── sjnkbs Swiper cards デフォルト値（sjnkbs_carousel.md §1・§4）── */
const PER_SLIDE_ROTATE = 2; // deg/段（背面ほど傾く）
const PER_SLIDE_OFFSET = 8; // %（背面の横ズレ基準）
const STEP_TRANSLATE_Z = 100; // px/段（奥行き）
const AUTOPLAY_MS = 3000; // §0 delay
const TRANSITION_MS = 300; // §2 speed
const PERSPECTIVE_PX = 1000; // 3D 視距離（translateZ を効かせる / プレビューで微調整）

/** pos: 0=最前(active) / 1=背面1 / 2=背面2 …（常に 0..N-1）→ §4 の transform */
function cardTransform(pos: number) {
  const rotateZ = -PER_SLIDE_ROTATE * pos; // §4: -2·o
  const translateZ = -STEP_TRANSLATE_Z * pos; // §4: -100·|o|
  const translateX = -(PER_SLIDE_OFFSET - 0.75 * pos) * pos; // §4: -(8-0.75|o|)·|o|
  return `translateX(${translateX}%) translateZ(${translateZ}px) rotateZ(${rotateZ}deg)`;
}

/** 背面ほど濃い影（§4: opacity = clamp((|o|-0.5)/0.5, 0, 1)。色は Figma の 15%黒） */
function shadowOpacity(pos: number) {
  return Math.min(Math.max((pos - 0.5) / 0.5, 0), 1);
}

export default function HeroPhotoCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // prefers-reduced-motion: reduce のときは自動再生しない（§5 / sjnkbs は未対応の改善点）
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || SLIDES.length < 2) return;

    const id = setInterval(() => {
      setActive((a) => (a + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const posOf = (i: number) => (i - active + SLIDES.length) % SLIDES.length;

  return (
    // 位置・サイズは置換前の静止カード div を踏襲（left-1/2 / w-80% / -mt / ar0.75）
    // perspective で translateZ の奥行きを有効化。rotate=BASE_TILT で「枠ごと傾け」(b)。
    <div
      className="relative left-1/2 -mt-[calc(20vw/375*100)] w-[80%] -translate-x-1/2"
      style={{
        aspectRatio: "0.75",
        perspective: `${PERSPECTIVE_PX}px`,
        rotate: `${BASE_TILT}deg`,
      }}
    >
      {SLIDES.map((slide, i) => {
        const pos = posOf(i);
        return (
          <div
            key={slide.src}
            className="absolute inset-0 overflow-hidden rounded-[8px]"
            style={{
              transformOrigin: "center bottom", // Swiper cards 同様（MainVisual.css 実測）
              transform: cardTransform(pos),
              zIndex: SLIDES.length - pos,
              transition: `transform ${TRANSITION_MS}ms ease, z-index 0ms`,
              /* TD-7 由来の宮口ソフト影（枠の落ち影）*/
              boxShadow: `calc(4vw/375*100) calc(4vw/375*100) calc(32vw/375*100) 0 rgba(187, 165, 165, 0.3)`,
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
            {/* 背面カードの暗がけ（Figma 02 の rgba(0,0,0,0.15) = slideShadows）*/}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-black/15"
              style={{
                opacity: shadowOpacity(pos),
                transition: `opacity ${TRANSITION_MS}ms ease`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
