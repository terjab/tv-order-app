import styled from 'styled-components'
import theme from '../../common/theme'
import { Link as BaseLink } from 'react-router-dom'

export const Link = styled(BaseLink)`
  background: ${theme.color.brown};
  padding: ${theme.size.xSmall};
  margin-top: ${theme.size.small};
  border: none;
  display: block;
  width: 100%;
  border-radius: ${theme.radius.small};
  color: ${theme.color.white};
  &:hover {
    background: ${theme.color.gray};
    text-decoration: none;
    color: ${theme.color.white};
  }
`
