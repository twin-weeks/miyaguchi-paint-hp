const worksData = [
  {
    image: '/img/free/works01.jpg',
    alt: '屋根塗装のイメージ',
  },
  {
    image: '/img/free/works02.jpg',
    alt: '外壁塗装のイメージ',
  },
  {
    image: '/img/free/works03.jpg',
    alt: '屋根板金のイメージ',
  },
  {
    image: '/img/free/works04.jpg',
    alt: '防水工事のイメージ',
  },
];

import { Reveal } from "./Reveal";

export default function Works() {
  // 継ぎ目を消すため画像を2周ぶん並べる（後半はスクリーンリーダー用に alt を空に）
  const loop = [...worksData, ...worksData];

  return (
    <section
      id="works"
      style={{
        padding: 'var(--section-gap) 0',
        backgroundColor: 'var(--color-surface-1)',
        overflow: 'hidden',
      }}
    >
      <Reveal>
        <div className="works-marquee-track">
          {loop.map((work, i) => {
            const isClone = i >= worksData.length;
            return (
              <div key={i} className="works-marquee-item overflow-hidden rounded-lg">
                <img
                  src={work.image}
                  alt={isClone ? '' : work.alt}
                  aria-hidden={isClone || undefined}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
