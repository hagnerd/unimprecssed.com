import React from 'react'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const PostDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`

const PostDetail = styled.p`
  ${scale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
  margin-right: ${rhythm(2)};
`

const Spacer = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const NextPrevPostUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const Title = styled.h1`
  @media (max-width: 700px) {
    ${scale(0.5)};
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Title>{post.frontmatter.title}</Title>
        <PostDetailsContainer>
          <PostDetail>{post.frontmatter.date}</PostDetail>
          <PostDetail>{post.timeToRead} min read</PostDetail>
        </PostDetailsContainer>
        <MDXRenderer>{post.code.body}</MDXRenderer>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <Spacer />
        <Bio />

        <NextPrevPostUL>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </NextPrevPostUL>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      timeToRead
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
