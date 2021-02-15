import styled from 'styled-components'
import theme from '../../common/theme'

export const P = styled.p`
  text-align: center;
  color: ${theme.color.white}; ;
`

export const PackageWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem;
  list-style: none;
`
