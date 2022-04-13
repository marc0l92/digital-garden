import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <section className="hero is-halfheight">
        <div className="hero-body">
          <div className="">
            <p className="title">
              <strong>Maggie</strong> makes visual essays about programming, design, and anthropology.
            </p>
            <p className="subtitle">
              Designer, anthropologist, and mediocre developer
              Currently leading design at HASH
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title">The Garden</h1>
        <h2 className="subtitle">
          A digital garden is a collection of imperfect notes, essays, and ideas growing slowly over time. Learn more
        </h2>
        <div className='columns'>
          <div className='column is-two-thirds'>
            <h1 className="title">Essays</h1>
            <h2 className="subtitle">
              Opinionated, longform narrative writing with an agenda
            </h2>
          </div>
          <div className='column'>
            <h1 className="title">Notes</h1>
            <h2 className="subtitle">
              Loose, unopinionated notes on things I don't entirely understand yet.
            </h2>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <h1 className="title">Patterns</h1>
            <h2 className="subtitle">
              Design patterns gathered from my own observations and research.
            </h2>
          </div>
          <div className='column is-two-thirds'>
            <h1 className="title">Library</h1>
            <h2 className="subtitle">
              Books I've read and books I like the idea of having read.
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title">Projects</h1>
        <h2 className="subtitle">
          In the past I have made things
        </h2>
      </section>
    </>
  )
}

// {posts.map((post, index) => (
//   <Post key={index} post={post} />
// ))}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
