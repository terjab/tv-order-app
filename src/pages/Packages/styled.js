import styled from 'styled-components'
import theme from '../../common/theme'

export const H1 = styled.h1`
  font-size: ${theme.fontSize.xxLarge};
  text-align: center;
  margin: ${theme.space[0]};
  color: ${theme.color.white};;
  font-family: ${theme.fonts.abril};
  text-decoration: underline;
`

export const P = styled.p`
  text-align: center;
  color: ${theme.color.white};;
`

export const PackageWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem;
  list-style: none;
`
