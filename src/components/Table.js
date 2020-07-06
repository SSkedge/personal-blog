import React from "react"
import styled from "styled-components"

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 2rem;
`

export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}