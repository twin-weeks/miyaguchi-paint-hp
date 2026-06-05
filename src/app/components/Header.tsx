export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-[var(--color-canvas)] border-b border-[var(--color-hairline)]"
      style={{ height: 56 }}
    >
      <div
        className="mx-auto flex items-center justify-between h-full"
        style={{ maxWidth: 'var(--container-max)', padding: '0 var(--space-md)' }}
      >
        <a href="#" className="flex items-center">
          <img src="/img/logo.png" alt="宮口塗装" className="h-10" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-normal" style={{ color: 'var(--color-ink)' }}>
          <a href="#reasons" className="hover:opacity-70">選ばれる理由</a>
          <a href="#works" className="hover:opacity-70">施工実績</a>
          <a href="#about" className="hover:opacity-70">会社概要</a>
          <a href="#contact" className="hover:opacity-70">お問い合わせ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:0422-xx-xxxx"
            className="hidden lg:inline-flex items-center justify-center text-white text-sm font-semibold rounded-lg"
            style={{ backgroundColor: 'var(--color-primary-dark)', minHeight: 40, padding: '8px 16px' }}
          >
            {/* <!-- TODO: 電話番号 Desktop.png から読み取り --> */}
            電話で相談
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-white text-sm font-semibold rounded-lg"
            style={{ backgroundColor: 'var(--color-accent)', minHeight: 40, padding: '8px 16px' }}
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </header>
  );
}
