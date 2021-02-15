import React from 'react'

import { Wrapper, Card, CardTitle, HR, CardText, Program, SectionWrapper } from './styled'
import Button from '../Button/index'

export const CardComponent = ({ data }) => {
  const { name, price,  programs: {kids, sport, regular} } = data

  return (
    <>
      <Wrapper>
        <Card>
          <CardTitle>{name}</CardTitle>
          <HR />
          <CardText>{price}</CardText>
          <HR />
          <SectionWrapper>
            <CardText>Programs:</CardText>
            <Program>Kids: {kids}</Program>
            <Program>Sport: {sport}</Program>
            <Program>regular: {regular}</Program>
          </SectionWrapper>
          <SectionWrapper>
            <Button>Select</Button>
          </SectionWrapper>
        </Card>
        </Wrapper>
    </>
  )
}