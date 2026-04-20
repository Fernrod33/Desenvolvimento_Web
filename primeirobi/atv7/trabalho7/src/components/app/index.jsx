import './index.css'
import Article from '../article'

export default function Container({ posts }) {
  return (
    <div>
      <header>
        <h1>TITULO PRINCIPAL</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="https://www.youtube.com/@guardianfer">Youtube</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="conteudo">
          {posts.map((post) => (
            <Article
              key={`${post.title}-${post.date}`}
              title={post.title}
              author={post.author}
              date={post.date}
              content={post.content}
              imageUrl={post.imageUrl}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>
        <aside>
          <h3>Aside</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <h3>Aside</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </aside>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/t_DOmdor2Bg"
            title="YouTube video"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </main>
      <footer>
        <p>Copyright © 2026</p>
      </footer>
    </div>
  );
}