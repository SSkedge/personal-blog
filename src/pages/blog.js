import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

export const BlogPage = () => {
    return (
        <Container>
            <FeatureImage />
            <Content>
                <ContentCard date="2020/07/02" title="My First Post" excerpt="hello my name is steven and I am a software developer at salecycle. I strive to be a 10x developer." slug="/my-first-post"/>
            </Content>
        </Container>
    )
}

export default BlogPage;