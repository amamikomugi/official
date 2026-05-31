import { useState } from 'react'
import '../App.css'

type Work = {
  id: string
  title: string
  tag: string
  description: string
  info: { label: string; value: string }[]
  link?: string
}

const sampleWorks: Work[] = [
  {
    id: 'w1',
    title: '崖下に沈む声',
    tag: 'マーダーミステリー',
    description:
      '第一作。断崖に建つ小さな旅館を舞台にした、クローズドサークル型のマーダーミステリー。',
    info: [
      { label: '人数', value: 'PL5人' },
      { label: '時間', value: '約3時間' },
      { label: '価格', value: '1000円' },
    ],
    link: 'https://amamicom-shop.booth.pm/',
  },
]

export default function Works() {
  const [selected, setSelected] = useState<Work | null>(null)

  return (
    <div>
      <div className="works-grid">
        {sampleWorks.map((w) => (
          <article
            key={w.id}
            className="card interactive"
            onClick={() => setSelected(w)}
          >
            <div>
              <p className="tag">{w.tag}</p>
              <h3>{w.title}</h3>
              <p className="muted">{w.description}</p>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>

            <dl className="info">
              {selected.info.map((it) => (
                <div key={it.label}>
                  <dt>{it.label}</dt>
                  <dd>{it.value}</dd>
                </div>
              ))}
            </dl>

            <div className="buttons">
              <a className="button booth" href={selected.link} target="_blank" rel="noreferrer">
                <span className="icon">🛍</span>
                <span className="label">Booth</span>
              </a>
              <button className="button ghost" onClick={() => setSelected(null)}>
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
