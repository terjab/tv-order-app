import styled from 'styled-components'
import theme from '../../common/theme'

const Button = styled.button`
  background: ${theme.color.brown};
  padding: ${theme.size.xSmall};
  margin-top: ${theme.size.small};
  border: none;
  width: 100%;
  border-radius: ${theme.radius.small};
  color: ${theme.color.white};
  &:hover {
    background: ${theme.color.gray};
  }
`

export default Button
