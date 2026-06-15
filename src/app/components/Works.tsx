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
  return (
    <section
      id="works"
      style={{ padding: 'var(--section-gap) 0', backgroundColor: 'var(--color-surface-1)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)', padding: '0 var(--space-md)' }}>
        <Reveal>
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className="mb-2 lg:text-4xl"
            style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.4, color: 'var(--color-primary)' }}
          >
            施工実績
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
            Works
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {worksData.map((work, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={work.image}
                alt={work.alt}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center mt-10">
          <button
            className="px-12 py-3 border rounded-lg text-sm tracking-widest transition-colors duration-200 hover:text-white"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-on-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
          >
            VIEW MORE
          </button>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
