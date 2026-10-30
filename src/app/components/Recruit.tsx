/* ─────────────────────────────────────────────────────────
   Recruit — 採用ページ（/recruit）
   内容の正本＝PJ_求人/02_spec/inbox/0713_公開手順_Engage_ハローワーク.md
   （Engage 求人「未経験歓迎！1ヶ月目からローラーで塗れる塗装スタッフ」）
   ※勤務時間・締め日などは宮口さん確認待ちの仮値を含む
   ───────────────────────────────────────────────────────── */
import { Reveal } from "./Reveal";

const STEPS: { term: string; items: string[] }[] = [
  { term: "1ヶ月〜", items: ["塗らない所を覆って守る（養生）", "ローラーで広い面を塗る", "道具の名前と、\n安全な動き方を覚える"] },
  { term: "〜半年", items: ["壁を塗り重ねて、\n一人できれいに塗れるように"] },
  { term: "半年〜1年", items: ["塗る前の準備を一人でまるごと\n（高圧洗浄・ケレン・養生）"] },
  { term: "1年〜", items: ["最後の仕上げ塗りまで一人で"] },
  { term: "2〜3年〜", items: ["はけで細かい所までていねいに", "指定の色を混ぜて作る（調色）", "家1軒をまるごと一人で\n＝一人前。独立も狙えます"] },
];

const PAY: { stage: string; term: string; daily: string; monthly: string }[] = [
  { stage: "入りたて", term: "入社〜", daily: "12,000円", monthly: "約26万円" },
  { stage: "基本ができる", term: "〜半年", daily: "13,000〜14,000円", monthly: "約29〜31万円" },
  { stage: "下準備を一人で", term: "半年〜1年", daily: "14,000〜15,000円", monthly: "約31〜33万円" },
  { stage: "仕上げまで一人で", term: "1年前後", daily: "16,000〜17,000円", monthly: "約35〜37万円" },
  { stage: "一人前", term: "2〜3年〜・一棟まかせられる", daily: "18,000〜20,000円", monthly: "約40〜44万円" },
];

const REQUIREMENTS: { label: string; value: string | string[] }[] = [
  { label: "職種", value: ["塗装スタッフ", "（外壁・屋根の塗装）"] },
  { label: "雇用形態", value: ["正社員", "業務委託も相談可"] },
  { label: "給与", value: ["日給 12,000円〜", "1年ごとに", "日当+1,000円が目安"] },
  { label: "勤務地", value: ["東京都および近郊の現場", "集合は吉祥寺", "直行・直帰もOK"] },
  { label: "勤務時間", value: ["8:00〜17:00", "実働8時間・休憩1時間", "現場により前後します"] },
  { label: "休日", value: ["日曜・祝日", "土曜は基本出勤", "休みたい日は相談OK"] },
  { label: "応募資格", value: ["未経験OK・学歴不問", "普通自動車免許", "体力があればOK", "（足場に上がります）"] },
  { label: "試用期間", value: ["3ヶ月", "日当は本採用と同じ"] },
  { label: "待遇", value: ["道具は会社支給", "（初期費用ゼロ）", "社会保険あり"] },
];

const TRIAL_CHECKS: { title: string; detail: string }[] = [
  { title: "時間と連絡を守れるか", detail: "遅れる時・休む時に、\n前もって連絡できればOKです。" },
  { title: "安全のルールを守れるか", detail: "ヘルメット・安全帯をつける。\n足場の上でふざけない。\nケガをしないことが一番です。" },
  { title: "わからない時に聞けるか", detail: "わからないまま進めるより、\n聞いてくれる方が助かります。" },
  { title: "あいさつと片付け", detail: "お客様の家で働く仕事です。\nあいさつと、使った場所の\n片付けを大事にしています。" },
];

const sectionTitle = { fontSize: "clamp(18px, 4.6cqw, 22px)", fontWeight: 700, color: "var(--color-primary)" } as const;
const body = { fontSize: "clamp(14px, 2.4cqw, 16px)", color: "var(--color-ink)", lineHeight: 1.8 } as const;
// 改行は 320px 幅（1行18字前後）でも1行に収まる位置で「\n」を入れ、pre-line で表示する
const lines = { whiteSpace: "pre-line" } as const;

export default function Recruit() {
  return (
    <section style={{ padding: "calc(var(--section-gap) + 64px) 0 var(--section-gap)", backgroundColor: "var(--color-canvas)", textWrap: "pretty", wordBreak: "auto-phrase" } as React.CSSProperties}>
      <div className="mx-auto" style={{ maxWidth: "var(--container-max)", padding: "0 var(--space-md)" }}>
        <Reveal>
          {/* パンくず：トップへ戻る導線 */}
          <nav aria-label="パンくず" className="mb-6" style={{ fontSize: 13, color: "var(--color-ink-muted)" }}>
            <a href="/" className="underline" style={{ color: "var(--color-primary)" }}>トップ</a>
            <span className="mx-2">＞</span>
            <span>採用情報</span>
          </nav>

          {/* ヘッダー */}
          <div className="text-center mb-10">
            <h1 className="mb-2" style={{ fontSize: "clamp(24px, 5.5cqw, 36px)", fontWeight: 600, lineHeight: 1.4, color: "var(--color-primary)" }}>
              採用情報
            </h1>
            <p aria-hidden="true" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(13px, 3.6cqw, 14px)", fontWeight: 500, color: "var(--color-ink-muted)" }}>
              Recruit
            </p>
          </div>

          <p className="mb-2 text-center" style={{ fontSize: "clamp(18px, 5cqw, 24px)", fontWeight: 700, color: "var(--color-ink)", lineHeight: 1.5 }}>
            未経験歓迎！
            <br />
            1ヶ月目からローラーで塗れる
            <br />
            塗装スタッフ募集
          </p>
          <p className="mb-12 text-center" style={body}>
            若手職人の育成・技術継承のため、
            <br />
            腰を据えて働ける仲間を募集します。
          </p>

          {/* 仕事内容 */}
          <h2 className="mb-3" style={sectionTitle}>仕事内容</h2>
          <p className="mb-4" style={{ ...body, ...lines }}>
            {"戸建てやアパートの外壁・屋根を塗る、\n現場の仕事です。\n1ヶ月目から、養生と\nローラー塗装をやってもらいます。\n最初は先輩について現場へ。\nいきなり難しいことはやりません。"}
          </p>
          <ul className="mb-12 flex flex-col gap-1 pl-5" style={{ ...body, listStyle: "disc" }}>
            <li>道具を運ぶ／準備する／片付ける</li>
            <li style={lines}>{"塗らない所をテープで守る\n（養生の手伝い）"}</li>
            <li>広い面をローラーで塗る</li>
            <li>現場の掃除</li>
          </ul>

          {/* 成長ステップ */}
          <h2 className="mb-4" style={sectionTitle}>何を・どのくらいで覚えるか</h2>
          <div className="mb-12 flex flex-col gap-4">
            {STEPS.map((s) => (
              <div key={s.term} className="rounded-lg p-4" style={{ backgroundColor: "var(--color-surface-1)" }}>
                <p className="mb-1" style={{ fontSize: 14, fontWeight: 700, color: "var(--color-primary)" }}>{s.term}</p>
                <ul className="flex flex-col gap-1 pl-5" style={{ ...body, listStyle: "disc" }}>
                  {s.items.map((i) => <li key={i} style={lines}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* 給与ロードマップ */}
          <h2 className="mb-2" style={sectionTitle}>腕が上がると、日当も上がります</h2>
          <p className="mb-4" style={{ ...body, color: "var(--color-ink-muted)", fontSize: 13 }}>目安のモデルケースです</p>
          <div className="mb-3 flex flex-col">
            {PAY.map((p) => (
              <div key={p.stage} className="py-3" style={{ borderBottom: "1px solid var(--color-hairline)" }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-ink)" }}>
                  {p.stage}
                  <span className="ml-2 inline-block whitespace-nowrap" style={{ fontSize: 12, fontWeight: 400, color: "var(--color-ink-muted)" }}>{p.term}</span>
                </p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "var(--color-primary)" }}>
                  <span className="inline-block whitespace-nowrap">日給 {p.daily}</span>
                  <span className="ml-2 inline-block whitespace-nowrap" style={{ fontSize: 12, fontWeight: 400, color: "var(--color-ink-muted)" }}>月収 {p.monthly}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mb-12" style={{ fontSize: 12, color: "var(--color-ink-muted)", lineHeight: 1.7 }}>
            ※期間は目安です。
            <br />
            ※覚える早さには個人差があります。
            <br />
            ※月収は21日稼働の場合の目安です。
          </p>

          {/* お試し期間（3ヶ月）で見ること — 叩き。宮口さんの確認待ち */}
          <h2 className="mb-2" style={sectionTitle}>3ヶ月のお試し期間で見ること</h2>
          <p className="mb-4" style={{ ...body, ...lines }}>
            {"お試し中も、日当は下げません。\n見るのは「塗るのがうまいか」\nではありません。\n未経験の方が多いので、\n技術は入ってから覚えれば大丈夫です。"}
          </p>
          <div className="mb-4 flex flex-col gap-3">
            {TRIAL_CHECKS.map((c) => (
              <div key={c.title} className="rounded-lg p-4" style={{ backgroundColor: "var(--color-surface-1)" }}>
                <p className="mb-1" style={{ fontSize: 15, fontWeight: 700, color: "var(--color-primary)" }}>✓ {c.title}</p>
                <p style={{ ...body, ...lines, fontSize: 14 }}>{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="mb-6 text-center" style={{ fontSize: "clamp(16px, 4.4cqw, 18px)", fontWeight: 700, color: "var(--color-ink)", lineHeight: 1.6 }}>
            見るのは、この4つだけです。
            <br />
            これができれば、
            <br />
            お試し期間はOKです。
          </p>
          <div className="mb-12 rounded-lg p-5" style={{ border: "2px solid var(--color-primary)" }}>
            <p className="mb-2" style={{ fontSize: 15, fontWeight: 700, color: "var(--color-primary)" }}>あなたが会社を見る<br />期間でもあります</p>
            <ul className="flex flex-col gap-1 pl-5" style={{ ...body, fontSize: 14, listStyle: "disc" }}>
              <li style={lines}>{"「高い所が合わない」など、\n正直に言ってください"}</li>
              <li style={lines}>{"お互い「いけそう」なら、\n続けましょう"}</li>
            </ul>
          </div>

          {/* 募集要項 */}
          <h2 className="mb-3" style={sectionTitle}>募集要項</h2>
          <table className="mb-12 w-full" style={{ borderCollapse: "collapse" }}>
            <tbody>
              {REQUIREMENTS.map((row) => (
                <tr key={row.label} style={{ borderBottom: "1px solid var(--color-hairline)" }}>
                  <th className="py-3 pr-4 text-left" style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)", width: 96, verticalAlign: "top" }}>
                    {row.label}
                  </th>
                  <td className="py-3" style={{ fontSize: "clamp(14px, 2.4cqw, 15px)", color: "var(--color-ink)", lineHeight: 1.7 }}>
                    {Array.isArray(row.value) ? row.value.map((v) => <div key={v}>{v}</div>) : row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 応募方法 */}
          <h2 className="mb-3" style={sectionTitle}>応募方法</h2>
          <p className="mb-6" style={{ ...body, ...lines }}>
            {"お電話、または\nこのページ下の応募フォームから\nご連絡ください。\n担当より面接の日程をご連絡します。"}
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="tel:0424623496"
              className="w-full max-w-[320px] rounded-lg py-4 text-center text-base font-bold text-white"
              style={{ backgroundColor: "var(--color-cta-blue)" }}
            >
              電話で応募する（042-462-3496）
            </a>
            <a
              href="#entry"
              className="w-full max-w-[320px] rounded-lg py-4 text-center text-base font-bold"
              style={{ border: "2px solid var(--color-cta-blue)", color: "var(--color-cta-blue)" }}
            >
              フォームから応募する
            </a>
          </div>
          <p className="mt-10 text-center">
            <a href="/" className="underline" style={{ fontSize: 14, color: "var(--color-primary)" }}>
              ← 宮口塗装のトップページへ戻る
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
