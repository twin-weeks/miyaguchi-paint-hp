/* ─────────────────────────────────────────────────────────
   RecruitEntry — 採用ページ専用の応募フォーム＋フッター
   ・トップの Contact（見積・お問い合わせ）の代わりに /recruit で出す
   ・RecruitFixedCta — 画面下固定の「電話で応募／フォームで応募」
   ※ 送信先は未接続（Contact と同じく Formspree 等を後で接続）
   ───────────────────────────────────────────────────────── */
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const selectStyle = {
  height: 40,
  borderRadius: 6,
  border: "1px solid var(--color-hairline)",
  padding: "0 12px",
  backgroundColor: "#fff",
  color: "var(--color-ink)",
  fontSize: 15,
} as const;

function Required() {
  return <span style={{ color: "var(--color-accent)" }}>*</span>;
}

export function RecruitEntry() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("（仮）送信処理は未接続です。フォームの見た目確認用です。");
  };

  return (
    <footer id="entry" style={{ backgroundColor: "var(--color-surface-1)" }}>
      <div className="mx-auto" style={{ maxWidth: "var(--container-max)", padding: "64px var(--space-md)" }}>
        <div className="mb-8 text-center">
          <h2 className="mb-2" style={{ fontSize: "clamp(24px, 5.5cqw, 36px)", fontWeight: 600, lineHeight: 1.4, color: "var(--color-primary)" }}>
            応募フォーム
          </h2>
          <p aria-hidden="true" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(13px, 3.6cqw, 14px)", fontWeight: 500, color: "var(--color-ink-muted)" }}>
            Entry
          </p>
        </div>

        <div className="mx-auto" style={{ maxWidth: 640 }}>
          <p className="mb-8 text-center leading-relaxed" style={{ fontSize: 15, color: "var(--color-ink)" }}>
            履歴書は不要です。
            <br />
            送信後、担当より
            <br />
            面接の日程をご連絡します。
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="entry-name" style={{ color: "var(--color-ink)" }}>お名前 <Required /></Label>
              <Input id="entry-name" name="name" required placeholder="宮口 太郎" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="entry-age" style={{ color: "var(--color-ink)" }}>年齢 <Required /></Label>
              <Input id="entry-age" name="age" type="number" inputMode="numeric" min={15} max={99} required placeholder="25" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="entry-tel" style={{ color: "var(--color-ink)" }}>電話番号 <Required /></Label>
              <Input id="entry-tel" name="tel" type="tel" required placeholder="090-0000-0000" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="entry-email" style={{ color: "var(--color-ink)" }}>メールアドレス</Label>
              <Input id="entry-email" name="email" type="email" placeholder="example@mail.com" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="entry-experience" style={{ color: "var(--color-ink)" }}>塗装の経験 <Required /></Label>
              <select id="entry-experience" name="experience" required defaultValue="" style={selectStyle}>
                <option value="" disabled>選んでください</option>
                <option>未経験</option>
                <option>少しある（手伝い・DIYなど）</option>
                <option>経験者</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="entry-style" style={{ color: "var(--color-ink)" }}>希望の働き方</Label>
              <select id="entry-style" name="workstyle" defaultValue="" style={selectStyle}>
                <option value="" disabled>選んでください</option>
                <option>正社員</option>
                <option>業務委託</option>
                <option>まだ決めていない</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="entry-message" style={{ color: "var(--color-ink)" }}>聞いておきたいこと・ひとこと</Label>
              <Textarea id="entry-message" name="message" rows={4} placeholder="面接の希望日、気になることなど、なんでもどうぞ。" />
            </div>

            <Button
              type="submit"
              className="self-center mt-2 px-10 py-6 rounded-lg text-base border-b-4 transition-all duration-150 active:translate-y-0.5 active:border-b-2"
              style={{ backgroundColor: "var(--color-cta-blue)", borderColor: "var(--color-cta-blue-dark)", color: "#fff", fontWeight: 700, minWidth: 220 }}
            >
              応募する
            </Button>
          </form>
        </div>
      </div>

      <div className="py-5 text-center" style={{ borderTop: "1px solid var(--color-hairline)" }}>
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 12, color: "var(--color-ink-muted)" }}>
          © 2026 宮口塗装. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export function RecruitFixedCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-[430px] gap-2 px-2 py-2 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]"
      style={{ backgroundColor: "rgba(85, 85, 85, 0.5)" }}
    >
      <a
        href="tel:0424623496"
        className="flex flex-1 items-center justify-center rounded-lg px-2 py-3.5 text-white border-b-4 transition-all duration-150 active:translate-y-0.5 active:border-b-2"
        style={{ backgroundColor: "var(--color-cta-orange)", borderColor: "var(--color-cta-orange-dark)" }}
      >
        <span className="text-[clamp(16px,4.4vw,20px)] font-black tracking-wide">電話で応募</span>
      </a>
      <a
        href="#entry"
        className="flex flex-1 items-center justify-center rounded-lg px-2 py-3.5 text-white border-b-4 transition-all duration-150 active:translate-y-0.5 active:border-b-2"
        style={{ backgroundColor: "var(--color-cta-blue)", borderColor: "var(--color-cta-blue-dark)" }}
      >
        <span className="text-[clamp(16px,4.4vw,20px)] font-black tracking-wide">フォームで応募</span>
      </a>
    </div>
  );
}
