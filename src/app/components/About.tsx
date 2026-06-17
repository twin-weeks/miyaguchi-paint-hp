const companyInfo: { label: string; value: string | string[] }[] = [
  { label: '会社名', value: '宮口塗装' },
  { label: '代表取締役社長', value: '宮口' },
  { label: '創業', value: '2006年8月' },
  { label: '所在地', value: '〒吉祥寺' },
  { label: '営業時間', value: '8:00 〜 17:00' },
  {
    label: '資格',
    value: [
      '1級塗装技能士',
      '2級建築施工管理技士',
      '有機溶剤作業主任者',
      '特定化学物質及び四アルキル鉛等作業主任者',
      'ゴンドラ特別教育',
      '足場の組立て等特別教育',
      'ダイオキシン類特別教育',
      'フルハーネス墜落制止用器具特別教育',
      '高所作業車（10m未満）',
    ],
  },
  {
    label: '事業内容',
    value: [
      '外壁塗装工事',
      '屋根塗装工事',
      'デザイン塗装工事',
      '付帯部塗装工事',
      '室内塗装工事',
      '防水工事',
      'シーリング工事',
      '各種工事',
    ],
  },
];

import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: 'var(--section-gap) 0', backgroundColor: 'var(--color-surface-1)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)', padding: '0 var(--space-md)' }}>
        <Reveal>
        <div className="flex flex-col">
          {/* Section header - centered */}
          <div className="text-center mb-12">
            <h2
              className="mb-2"
              style={{ fontSize: 'clamp(24px, 5.5cqw, 36px)', fontWeight: 600, lineHeight: 1.4, color: 'var(--color-primary)' }}
            >
              会社概要
            </h2>
            <p
              aria-hidden="true"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(13px, 3.6cqw, 14px)',
                fontWeight: 500,
                color: 'var(--color-ink-muted)',
              }}
            >
              Outline
            </p>
          </div>

          {/* Table */}
          <div className="mx-auto w-full" style={{ maxWidth: 800 }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                {companyInfo.map((row) => (
                  <tr key={row.label} style={{ borderBottom: '1px solid var(--color-hairline)' }}>
                    <th
                      className="text-left py-4 pr-8"
                      style={{
                        fontSize: 'clamp(13px, 2.2cqw, 14px)',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        width: 120,
                        verticalAlign: 'top',
                      }}
                    >
                      {row.label}
                    </th>
                    <td
                      className="py-4"
                      style={{ fontSize: 'clamp(14px, 2.4cqw, 16px)', fontWeight: 400, color: 'var(--color-ink)' }}
                    >
                      {Array.isArray(row.value) ? (
                        <div className="flex flex-col gap-1">
                          {row.value.map((v) => (
                            <span key={v}>{v}</span>
                          ))}
                        </div>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Area info */}
            <div className="mt-8">
              <h3
                className="mb-4"
                style={{ fontSize: 'clamp(16px, 4cqw, 20px)', fontWeight: 600, color: 'var(--color-ink)' }}
              >
                対応エリア
              </h3>
              <div className="mb-4">
                <p className="mb-1" style={{ fontSize: 'clamp(13px, 3.6cqw, 14px)', fontWeight: 600, color: 'var(--color-primary)' }}>
                  メイン拠点
                </p>
                <p style={{ fontSize: 'clamp(14px, 2.4cqw, 16px)', fontWeight: 400, color: 'var(--color-ink)' }}>
                  三鷹市・武蔵野市（吉祥寺）・西東京市（田無）周辺
                </p>
              </div>
              <div className="mb-4">
                <p className="mb-1" style={{ fontSize: 'clamp(13px, 3.6cqw, 14px)', fontWeight: 600, color: 'var(--color-primary)' }}>
                  対応可能エリア
                </p>
                <p style={{ fontSize: 'clamp(14px, 2.4cqw, 16px)', fontWeight: 400, color: 'var(--color-ink)' }}>
                  東京都内および近郊エリア
                </p>
              </div>
              <p style={{ fontSize: 'clamp(13px, 2.4cqw, 15px)', fontWeight: 400, color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>
                40年間、地元を中心に活動してまいりましたが、ありがたいことにご紹介の輪が広がり、現在では東京近郊であればどこへでも伺っております。少し遠いかな？と思う場合でも、まずはお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
