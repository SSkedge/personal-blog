import React from "react"
import { BackgroundGradient, Container, GradientBar } from "../components";
import { Link } from "gatsby";

export const IndexPage = () => {
  return (
    <Container>
      <GradientBar />
      <BackgroundGradient />
      <Link to="/blog">
        <h1>blog</h1>
      </Link>
    </Container>
  )
}

export default IndexPage;