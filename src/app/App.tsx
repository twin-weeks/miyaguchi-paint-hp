import Header from "./components/Header";
import Hero from "./components/Hero";
import Greeting from "./components/Greeting";
import Reasons from "./components/Reasons";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import FixedFooterCta from "./components/FixedFooterCta";

export default function App() {
  return (
    <>
      <Header />
      {/* SPロック：本文を「上限430pxの棚（app-shell）」に入れる。
          PC幅では中央のスマホ1本カラムになる。Header/FixedFooterCta は fixed の
          ため棚の外（各自で max-w-[430px] 中央寄せ）。詳細は globals.css の .app-shell */}
      <div className="app-shell">
        <main>
          <Hero />
          <Greeting />
          <Reasons />
          <Works />
          <About />
        </main>
        <Contact />
        {/* 固定フッターCTA が本文末尾を隠さないためのスペーサー（フッター高ぶん）*/}
        <div aria-hidden="true" style={{ height: 72 }} />
      </div>
      <FixedFooterCta />
    </>
  );
}
