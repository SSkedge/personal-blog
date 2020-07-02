import React from "react"
import { Container } from "../components";
import { Link } from "gatsby";

export const IndexPage = () => {
  return (
    <Container>
      <Link to="/blog">
        <h1>blog</h1>
      </Link>
    </Container>
  )
}

export default IndexPage;