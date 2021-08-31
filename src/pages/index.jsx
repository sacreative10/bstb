import * as React from 'react'
import { graphql } from 'gatsby'
import '../styles/styles.scss'
import { Layout } from '../components/layout'


// markup
const IndexPage = (props) => {
    return (
        <>
        <Layout variant="regular" height="extend">
            <h1>Website Under Heavy Development</h1>
        </Layout>
        </>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        indexImage: file(relativePath: { eq: "stacked-waves-haikei.png" }) {
            childImageSharp {
                fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
