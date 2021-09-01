import * as React from 'react'
import { graphql, Link } from 'gatsby'
import '../styles/styles.css'
import Layout from '../components/layout'

// markup
const IndexPage = ({ data }) => {
    const { posts } = data.blog // call the value from Graphql
    return (
        <>
          <Layout>
            <h1>Website Under Heavy Development</h1>
            <div>
                {posts.map((post) => (
                    <article key={post.id}>
                        {/*you can find the structure of the query down below or in gatsby-node.js*/}
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
// allMarkdownRemark is the converting the md into html for us
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
