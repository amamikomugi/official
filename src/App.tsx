import './App.css'

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

          <article className="card">
            <div>
              <p className="tag">マーダーミステリー</p>
              <h3>崖下に沈む声</h3>
              <p>
                第一作。断崖に建つ小さな旅館を舞台にした、クローズドサークル型のマーダーミステリー。
              </p>
            </div>

            <dl className="info">
              <div>
                <dt>人数</dt>
                <dd>PL5人</dd>
              </div>
              <div>
                <dt>時間</dt>
                <dd>約3時間</dd>
              </div>
              <div>
                <dt>GM有無</dt>
                <dd>GMレス対応</dd>
              </div>
              <div>
                <dt>形式</dt>
                <dd>オンライン</dd>
              </div>
              <div>
                <dt>価格</dt>
                <dd>1000円</dd>
              </div>
            </dl>

            <div className="buttons">
              <a className="button" href="https://amamicom-shop.booth.pm/" target="_blank" rel="noreferrer">
                BOOTHで見る
              </a>
            </div>
          </article>
        </section>

        <section id="profile" className="section">
          <h2>作者プロフィール</h2>
          <div className="card">
            <h3>甘味小麦@おーぼん</h3>
            <p>
              可能な限り読み合わせを少なく、それでいて楽しさを感じられるようなマーダーミステリーを制作しています。
              読み合わせを減らしているのは、単純に私が苦手だからです。
            </p>
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