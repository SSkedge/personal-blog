import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { H1 } from "../styles/Typography";
import { Container, Post, FeatureImage, Video } from "../components";

const singlePost = ({ data }) => {
    const featureImage = data.mdx.frontmatter.featureImage ?
        <FeatureImage fixed={data.mdx.frontmatter.featureImage.childImageSharp.fixed} /> :
        <FeatureImage />

    return (
        <Container>
            {featureImage}
            <Post>
                <H1 margin="0 0 2rem 0">
                    {data.mdx.frontmatter.title}
                </H1>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
                {data.mdx.frontmatter.video && <Video videoSRC={data.mdx.frontmatter.video} />}
            </Post>
        </Container>
    )
}

export default singlePost;

export const pageQuery = graphql`
    query SinglePostQuery($id: String!) {
        mdx(id: {eq: $id }) {
            body
            frontmatter {
                date
                excerpt
                slug
                title
                featureImage {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                video
            }
        }
    }
`