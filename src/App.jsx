import { Post } from "./components/Post";
import './global.css'
import styles from './App.module.css'
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JoaoCarmello.png',
      name: 'Matheus Carmello',
      role: 'Desenvolvedor Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, evento da Rocketseat.' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-11 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/JoaoCarmello.png',
      name: 'Matheus Carmello 2',
      role: 'Desenvolvedor Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, evento da Rocketseat.' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-11 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
