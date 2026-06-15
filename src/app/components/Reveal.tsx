"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────
   アニメ専用ファイル（motion / Framer Motion v12）
   正本: 02_spec/sjnkbs_登場＋スクロール＋マーキー_anim.md

   - <Reveal>         : スクロールで画面に入ったら下からフェードアップ（1回）。
                        セクションの「中身」を包むだけで使う（A案・スクロールreveal）。
   - entranceContainer/fadeUpItem/sweepInDeco
                      : 登場(on-load)用の variants。Hero.tsx が使う（A案・忠実ハイブリッド）。
                        持続要素＝フェードアップ / 装飾＝左下から流れ込む。

   ※ すべて prefers-reduced-motion で無効化（参考サイトには無いが宮口では付ける方針）。
   ※ ツマミは y(距離) / delay(順番ずらし) / duration。固定px時代と同じ"数値いじり"。
   ───────────────────────────────────────────────────────── */

const EASE = [0.4, 0, 0.2, 1] as const; // sjnkbs 標準イージング（cubic-bezier）

/** スクロールで画面内に入ったら、下からふわっと出して残す（once）。中身を包むだけ。 */
export function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── 登場(on-load)用 variants（Hero.tsx で使う）─────────────── */

/** 親：子を少しずつ遅らせて順番に登場させるコンテナ */
export const entranceContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

/** 持続要素（コピー・写真・ブランド名）：下からフェードアップして「残る」 */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** 装飾（ブラシ・屋根・ドット等）：左下からスッと流れ込み、その場で止まる。
    ＝ sjnkbs circleAppear の「現れる」前半だけを採り、最後に消えない版。 */
export const sweepInDeco: Variants = {
  hidden: { opacity: 0, scale: 0.4, x: -20, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};
