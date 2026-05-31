import './App.css'
import Works from './components/Works'

function App() {
  return (
    <div className="site">
      <header className="hero">
        <p className="eyebrow">Official Website</p>
        <h1>甘味小麦@おーぼん 公式サイト</h1>
        <p className="lead">
          ここは甘味小麦@おーぼんの公式サイトです。
          マーダーミステリー作品、制作情報などを掲載する予定です。
        </p>

        <nav className="nav">
          <a href="#works">作品一覧</a>
          <a href="#profile">作者プロフィール</a>
          <a href="#contact">問い合わせ</a>
        </nav>
      </header>

      <main>
        <section id="works" className="section">
          <h2>作品一覧</h2>
          <Works />
        </section>

        <section id="profile" className="section">
          <h2>作者プロフィール</h2>
          <div className="card">
            <h3>甘味小麦@おーぼん</h3>
            <p>
              可能な限り読み合わせを少なく、それでいて楽しさを感じられるようなマーダーミステリーを制作しています。
            </p>
            <p>
              読み合わせを減らしているのは、単純に私が苦手だからです。
            </p>
            <div className="social-links">
              <a href="https://twitter.com/y_oubon" target="_blank" rel="noreferrer" className="social-btn twitter" title="Twitter">
                <span className="icon">𝕏</span>
                <span className="label">X/Twitter</span>
              </a>
              <a href="https://bsky.app/profile/" target="_blank" rel="noreferrer" className="social-btn bluesky" title="Bluesky">
                <span className="icon">🦋</span>
                <span className="label">Bluesky</span>
              </a>
              <a href="https://www.youtube.com/@" target="_blank" rel="noreferrer" className="social-btn youtube" title="YouTube">
                <span className="icon">▶</span>
                <span className="label">YouTube</span>
              </a>
              <a href="https://amamicom-shop.booth.pm/" target="_blank" rel="noreferrer" className="social-btn booth" title="Booth">
                <span className="icon">🛍</span>
                <span className="label">Booth</span>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>問い合わせ</h2>
          <div className="card">
            <p>
              作品に関するお問い合わせ、感想、不具合報告などはこちらからお願いします。
            </p>
            <a className="button" href="#" target="_blank" rel="noreferrer">
              Googleフォームへ
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 甘味小麦@おーぼん</p>
      </footer>
    </div>
  )
}

export default App