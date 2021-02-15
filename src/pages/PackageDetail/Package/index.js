import React from 'react'
import { H1 } from '../../../components/Header'
import { Program } from '../../../components/Program'
import { Wrapper, P } from './styled'

export const Package = ({ currentPackage }) => {
  const { price } = currentPackage

  const getPrograms = () => {
    let programs = []

    for (let [program, count] of Object.entries(currentPackage.programs)) {
      for (let i = 0; i < count; i++) {
        programs.push(<Program name={program} />)
      }
    }

    return programs
  }

  return (
    <>
      <H1>Your packages</H1>
      <P>{price}</P>
      <Wrapper>{getPrograms()}</Wrapper>
    </>
  )
}
