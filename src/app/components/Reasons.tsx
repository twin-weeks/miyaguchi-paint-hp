interface ReasonCardProps {
  number: string;
  tag: string;
  h3Line1: string;
  h3Line2: string;
  body: string;
  image: string;
  imageAlt: string;
  stats?: { label: string; value: string }[];
}

function ReasonCard({
  number,
  tag,
  h3Line1,
  h3Line2,
  body,
  image,
  imageAlt,
  stats,
}: ReasonCardProps) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        backgroundColor: "var(--color-canvas)",
        boxShadow: "0 2px 16px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Top area: label + text + image (desktop: single row, mobile: label+text row then image below) */}
      <div className="flex flex-col lg:flex-row">
        {/* Label + Text always in a row */}
        <div className="flex flex-row flex-1 min-w-0">
          {/* Reason label - vertical, aligned with tag + dotted border right */}
          <div
            className="shrink-0 flex items-start justify-center pt-6 pl-3 pr-3 lg:pt-8 lg:pl-4 lg:pr-4"
            style={{
              borderRight: "1px dashed var(--color-hairline)",
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--color-primary)",
                writingMode: "vertical-rl",
                letterSpacing: "0.05em",
              }}
            >
              {number}
            </span>
          </div>

          {/* Text content */}
          <div className="flex-1 p-6 lg:py-8 lg:pr-8 lg:pl-2">
            <span
              className="inline-block pb-1 mb-4 text-sm font-semibold"
              style={{
                color: "var(--color-ink)",
                borderBottom: "2px solid var(--color-ink)",
              }}
            >
              {tag}
            </span>
            <h3
              className="mb-4"
              style={{
                fontSize: 18,
                fontWeight: 600,
                lineHeight: 1.4,
                color: "var(--color-ink)",
              }}
            >
              <span className="lg:text-2xl">{h3Line1}</span>
              <br />
              <span className="lg:text-2xl">{h3Line2}</span>
            </h3>
            <p
              className="mb-6"
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.8,
                color: "var(--color-ink-muted)",
              }}
            >
              {body}
            </p>
            {stats && (
              <div className="flex gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-xs mb-1 font-semibold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="text-xl lg:text-3xl"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        color: "var(--color-primary)",
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-[380px] shrink-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ aspectRatio: "16/9", minHeight: 200 }}
          />
        </div>
      </div>
    </div>
  );
}

import { Reveal } from "./Reveal";

export default function Reasons() {
  return (
    // 食い込みセクション：Greeting の帯下端からはみ出した装飾（木・ローラー・
    // ピンクビル＝SP≈118px / md≈205px）を、灰背景の上に受ける。
    // z-0 で Greeting(z-10) の装飾を上に通す。上パディング = 装飾クリア分 +
    // section-gap。▼ 重なり量の唯一の調整ツマミ＝pt の「+120px / +210px」部分。
    <section
      id="reasons"
      className="relative z-0 pt-[calc(var(--section-gap)+120px)] pb-[var(--section-gap)] md:pt-[calc(var(--section-gap)+210px)]"
      style={{ backgroundColor: "var(--color-surface-1)" }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "var(--container-max)",
          padding: "0 var(--space-md)",
        }}
      >
        <Reveal>
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span
              className="inline-block rounded-full"
              style={{
                width: 8,
                height: 8,
                backgroundColor: "var(--color-primary)",
              }}
            />
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "var(--color-primary)",
              }}
            >
              選ばれる理由
            </p>
          </div>
          <p
            aria-hidden="true"
            className="mb-3"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--color-ink-muted)",
              letterSpacing: "0.05em",
            }}
          >
            Why Choose Us
          </p>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 600,
              lineHeight: 1.4,
              color: "var(--color-ink)",
            }}
            className="lg:text-4xl"
          >
            10年先も美しい塗り替えを
          </h2>
        </div>

        {/* Reason cards */}
        <div className="flex flex-col" style={{ gap: 32 }}>
          <ReasonCard
            number="Reason 01."
            tag="地域密着、紹介だけで40年"
            h3Line1="地域知り尽くした職人が"
            h3Line2="最適な施工をご提案"
            body="外壁の診断から、夏の室温を下げる遮熱塗装まで。お住まいの悩みは、この地域の気候と環境を知り尽くした熟練の職人が直接お伺いし、的確に解決いたします。"
            image="/img/reason01.jpg"
            imageAlt="屋根上の職人"
            stats={[
              { label: "累計施工実績", value: "5,000件以上" },
              { label: "年間施工実績", value: "300件以上" },
            ]}
          />

          <ReasonCard
            number="Reason 02."
            tag="下地処理へのこだわり"
            h3Line1="塗装の寿命を決める下地"
            h3Line2="見えない部分を丁寧に"
            body="塗装の寿命を本当に決めるのは、高級な塗料ではなく「下地処理」です。ひび割れの補修やサビ落とし、高圧洗浄など、上に塗れば見えなくなってしまう工程にこそ私たちの真価があります。40年の現場で培われ、職人の身体に染み込んだ妥協のない手順を、一切省略することなく実行します。美しさが10年先も続く理由はここにあります。"
            image="/img/reason02.jpg"
            imageAlt="足場・梯子"
          />

          <ReasonCard
            number="Reason 03."
            tag="面倒な手続きも、まるごとお任せ"
            h3Line1="助成金や保険の手続きも"
            h3Line2="まるごとサポート"
            body="「うちの塗り替え、助成金は使えるかな？」「火災保険の対象になる？」そんな疑問も、まずは私たちにご相談ください。専門知識が必要な書類づくりや、ちょっと面倒な事務手続きも、私たちがしっかり代行・サポートいたします。手間をかけずに、賢くおトクに。大切なお家をメンテナンスできるよう、全力でバックアップします。"
            image="/img/reason03.jpg"
            imageAlt="外壁のハケで塗装中"
          />
        </div>

        {/* 末尾CTA：説得直後の一押し。リンク先は #contact フォーム。
            押し込みエフェクトは FixedFooterCta と同じ作法（border-b-4 + active:translate）。 */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-b-4 px-[clamp(32px,8vw,56px)] py-[clamp(14px,3.5vw,18px)] text-white transition-all duration-150 active:translate-y-0.5 active:border-b-2"
            style={{
              backgroundColor: "var(--color-cta-blue)",
              borderColor: "var(--color-cta-blue-dark)",
            }}
          >
            <span className="text-[clamp(16px,4.2vw,20px)] font-bold tracking-wide">
              無料見積もりはこちら
            </span>
            <span aria-hidden="true" className="text-[clamp(16px,4.2vw,20px)]">
              →
            </span>
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
