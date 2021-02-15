import styled from 'styled-components'
import theme from '../../../common/theme'
import { Link as BaseLink } from 'react-router-dom'

export const Wrapper = styled.div`
  text-align: center;
  border-radius: ${theme.radius.small};
  width: 20rem;
  height: 28rem;
  margin: 2rem;
  border: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
`

export const SectionWrapper = styled.div`
  margin-top: ${theme.size.large};
  margin-bottoms: ${theme.size.large};
`

export const Card = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${theme.size.small};
`

export const CardTitle = styled.h1`
  font-size: ${theme.size.medium};
  margin-bottom: ${theme.size.small};
`

export const CardText = styled.p``

export const Program = styled.p`
  background-color: ${theme.color.gray};
  border-radius: ${theme.radius.small};
  color: ${theme.color.white};
  padding: ${theme.size.xSmall};
  margin: ${theme.size.xSmall};
  display: inline-block;
`

export const HR = styled.hr``

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
