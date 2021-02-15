import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const Link = styled(BaseLink)`
  color: ${theme.color.black};
  font-size: ${theme.size.mSmall};
  padding: 3rem 2rem;
  &:hover {
    text-decoration: none;
    color: ${theme.color.gray};
  }
`