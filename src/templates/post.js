import React from 'react'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { Container, Post } from "../components"

const post = ({ data }) => {
    // const featureImage = data.mdx.frontmatter.childImageSharp.fixed
    const post_data = {
        gradient: data.mdx.frontmatter.gradient,
        title: data.mdx.frontmatter.title,
        subtitle: data.mdx.frontmatter.subtitle,
        date: data.mdx.frontmatter.date,
        live_link: data.mdx.frontmatter.live_link,
        code_link: data.mdx.frontmatter.code_link,
        read_time: data.mdx.frontmatter.read_time,
        capitalized_slug: data.mdx.frontmatter.capitalized_slug,
    }

    return (
        <Container>
            <Post post_data={post_data}>
                 <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Post>
        </Container>
    )
}

export default post

export const pageQuery = graphql`
    query PostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                date
                slug
                title
                subtitle
                capitalized_slug
                live_link
                code_link
                read_time
                gradient
            }
        }
    }
`
