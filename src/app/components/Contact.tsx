export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
      {/* CTA Banner */}
      <div
        className="relative mx-auto py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        style={{ maxWidth: 'var(--container-max)', padding: '64px var(--space-md)' }}
      >
        {/* Left: Illustration + Title */}
        <div className="flex flex-col items-center lg:items-start shrink-0">
          <div
            className="relative rounded-full overflow-hidden flex items-center justify-center bg-white"
            style={{ width: 180, height: 180 }}
          >
            <img
              src="/img/cta-contact.png"
              alt="お問い合わせイラスト"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>

          <div className="mt-8 text-center lg:text-left">
            <p
              aria-hidden="true"
              className="mb-1"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--color-primary-mid)',
              }}
            >
              Contact
            </p>
            <h2
              className="text-3xl lg:text-4xl"
              style={{
                fontWeight: 600,
                color: 'var(--color-on-primary-dark)',
              }}
            >
              お問い合わせ
            </h2>
          </div>
        </div>

        {/* Right: Description + Buttons */}
        <div className="flex-1 flex flex-col justify-center">
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-on-primary-dark)',
              opacity: 0.85,
            }}
          >
            {/* <!-- TODO: Desktop.png からリード文を読み取り --> */}
            お見積り・ご相談は無料です。お気軽にお問い合わせください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Phone button - button-tel */}
            <a
              href="tel:0422-xx-xxxx"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg transition-opacity duration-200 hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-primary-dark)',
                border: '2px solid var(--color-on-primary-dark)',
                color: 'var(--color-on-primary-dark)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: 16,
                minHeight: 48,
                minWidth: 260,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.07 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006.07 6.07l1.27-.34a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {/* <!-- TODO: 電話番号を Desktop.png から読み取り --> */}
              <span>お電話はこちら</span>
            </a>

            {/* Form button - button-primary (accent red) */}
            <a
              href="#contact-form"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg transition-opacity duration-200 hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-on-accent)',
                fontWeight: 600,
                fontSize: 16,
                minHeight: 48,
                minWidth: 220,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span>お問い合わせフォーム</span>
            </a>
          </div>

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
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 12,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          © 2024 宮口塗装. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
