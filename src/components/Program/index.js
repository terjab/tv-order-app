import React from "react"
import { Wrapper } from './styled'

export const Program = ({ name }) => {
  return <Wrapper programName={name}>{name}</Wrapper>
}
