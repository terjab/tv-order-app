import React from 'react'
import { Link } from '../../../components/Link'
import {
  Wrapper,
  Card,
  CardTitle,
  HR,
  CardText,
  Program,
  SectionWrapper,
} from './styled'

export const CardComponent = ({ data }) => {
  const {
    id,
    name,
    price,
    programs: { kids, sport, regular },
  } = data

  return (
    <>
      <Wrapper>
        <Card>
          <CardTitle>{name}</CardTitle>
          <HR />
          <CardText>{price}$</CardText>
          <HR />
          <SectionWrapper>
            <CardText>Programs:</CardText>
            <Program>Kids: {kids}</Program>
            <Program>Sport: {sport}</Program>
            <Program>regular: {regular}</Program>
          </SectionWrapper>
          <SectionWrapper>
            <Link to={`/${id}`}>Select</Link>
          </SectionWrapper>
        </Card>
      </Wrapper>
    </>
  )
}
