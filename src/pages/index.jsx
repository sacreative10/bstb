import * as React from 'react'
import { graphql, Link } from 'gatsby'
import '../styles/styles.scss'
import Layout from '../components/layout'


// markup
const IndexPage = ({ data }) => {
    const { posts } = data.blog
    return (
        <>

            <Layout>
                <h1>Website Under Heavy Development</h1>
                <div>

      {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
            </Layout>

        </>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`