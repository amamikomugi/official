import React, { useState } from 'react'
import '../App.css'

type Post = {
  id: string
  author: string
  text: string
  time: string
}

export default function SocialTimeline() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [source, setSource] = useState<string | null>(null)

  async function load(kind: 'twitter' | 'bluesky') {
    setLoading(true)
    setSource(kind)
    try {
      const res = await fetch(`/data/${kind}.json`)
      const data = await res.json()
      setPosts(data.posts || [])
    } catch (e) {
      console.error(e)
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="social-controls">
        <button className="button" onClick={() => load('twitter')}>
          Twitterを読み込む
        </button>
        <button className="button" onClick={() => load('bluesky')}>
          Blueskyを読み込む
        </button>
        <p className="muted small">※実環境ではAPI or ウィジェットへ差し替えが必要です</p>
      </div>

      <div className="social-list">
        {loading && <p>読み込み中…</p>}
        {!loading && posts.length === 0 && <p className="muted">タイムラインがありません</p>}
        {posts.map((p) => (
          <article key={p.id} className="social-post card">
            <div>
              <strong>{p.author}</strong>
              <time className="muted small">{p.time}</time>
            </div>
            <p>{p.text}</p>
          </article>
        ))}
      </div>

      {source && (
        <p className="muted small">読み込んだソース: {source}</p>
      )}
    </div>
  )
}
