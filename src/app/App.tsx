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
      <FixedFooterCta />
    </>
  );
}
