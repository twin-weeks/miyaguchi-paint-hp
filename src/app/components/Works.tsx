const worksData = [
  {
    image: '/img/Works01.jpg',
    alt: '施工実績1 - 屋根塗装',
  },
  {
    image: '/img/Works02.jpeg',
    alt: '施工実績2 - 外壁塗装',
  },
  {
    image: '/img/Works03.webp',
    alt: '施工実績3 - 屋根板金',
  },
  {
    image: '/img/Works04.jpeg',
    alt: '施工実績4 - 防水工事',
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
