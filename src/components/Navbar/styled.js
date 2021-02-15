import styled from 'styled-components'
import theme from '../../common/theme'

export const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-bottom: ${theme.size.xxLarge};
  padding: 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
`

export const NavItem = styled.li`
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`

export const Desciption = styled.p`
  font-size: ${theme.size.mSmall};
`


