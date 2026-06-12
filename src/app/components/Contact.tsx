import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';

export default function Contact() {
  // 仮: 送信先（バックエンド）未接続。Formspree 等の導入はデプロイ先決定とセットで後決め。
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('（仮）送信処理は未接続です。フォームの見た目確認用です。');
  };

  return (
    <footer id="contact" className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-canvas)' }}>
      {/* CTA Banner */}
      <div
        className="mx-auto"
        style={{ maxWidth: 'var(--container-max)', padding: '64px var(--space-md)' }}
      >
        {/* 画像部分は一旦撤去（後で使うかもしれないので残す / 2026-06-13）
        <div
          className="relative mx-auto mb-8 rounded-full overflow-hidden flex items-center justify-center bg-white"
          style={{ width: 180, height: 180 }}
        >
          <img
            src="/img/cta-contact.png"
            alt="お問い合わせイラスト"
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
        */}

        {/* Section header（他セクション＝Works と同形: 和文大→英字小・中央）*/}
        <div className="text-center mb-12">
          <h2
            className="mb-2 lg:text-4xl"
            style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.4, color: 'var(--color-primary)' }}
          >
            お問い合わせ
          </h2>
          <p
            aria-hidden="true"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--color-ink-muted)',
            }}
          >
            Contact
          </p>
        </div>

        {/* Description + Form（中央・横幅を抑える）*/}
        <div className="mx-auto" style={{ maxWidth: 640 }}>
          <p
            className="mb-8 text-center leading-relaxed"
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-ink-muted)',
            }}
          >
            {/* <!-- TODO: Desktop.png からリード文を読み取り --> */}
            お見積り・ご相談は無料です。お気軽にお問い合わせください。
          </p>

          {/* お問い合わせフォーム（仮）— 既存 shadcn/ui 部品を配置。送信先は未接続 */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-name" style={{ color: 'var(--color-ink)' }}>
                お名前 <span style={{ color: 'var(--color-accent)' }}>*</span>
              </Label>
              <Input id="contact-name" name="name" required placeholder="宮口 太郎" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1.5">
                <Label htmlFor="contact-tel" style={{ color: 'var(--color-ink)' }}>
                  電話番号
                </Label>
                <Input id="contact-tel" name="tel" type="tel" placeholder="0422-00-0000" />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <Label htmlFor="contact-email" style={{ color: 'var(--color-ink)' }}>
                  メールアドレス
                </Label>
                <Input id="contact-email" name="email" type="email" placeholder="example@mail.com" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-message" style={{ color: 'var(--color-ink)' }}>
                お問い合わせ内容 <span style={{ color: 'var(--color-accent)' }}>*</span>
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="お見積りのご希望箇所、ご相談内容などをご記入ください。"
              />
            </div>

            <Button
              type="submit"
              className="self-center mt-2 px-10 py-6 rounded-lg text-base"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-on-accent)',
                fontWeight: 600,
                minWidth: 220,
              }}
            >
              送信する
            </Button>
          </form>

          <p
            className="mt-6"
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: 'var(--color-primary-mid)',
            }}
          >
            {/* <!-- TODO: 受付時間を Desktop.png から読み取り --> */}
          </p>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div
        className="py-5 text-center"
        style={{ borderTop: '1px solid var(--color-hairline)' }}
      >
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 12,
            fontWeight: 400,
            color: 'var(--color-ink-muted)',
          }}
        >
          © 2024 宮口塗装. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
