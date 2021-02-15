import React from 'react'
import * as routes from '../../routes'
import {
  Wrapper,
  Card,
  CardTitle,
  HR,
  CardText,
  Program,
  SectionWrapper,
  Link,
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
          <CardText>{price}</CardText>
          <HR />
          <SectionWrapper>
            <CardText>Programs:</CardText>
            <Program>Kids: {kids}</Program>
            <Program>Sport: {sport}</Program>
            <Program>regular: {regular}</Program>
          </SectionWrapper>
          <SectionWrapper>
            <Link to={routes.getPackageDetailRoute(id)}>Select</Link>
          </SectionWrapper>
        </Card>
      </Wrapper>
    </>
  )
}
