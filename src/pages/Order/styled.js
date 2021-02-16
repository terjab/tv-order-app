import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'
import theme from '../../common/theme'

export const Summary = styled.div`
  margin: ${theme.size.large};
`

export const SummaryHeader = styled.h4`
`

export const SummaryItem = styled.li`
  padding: 0 20px 20px 0;
`

export const HR = styled.hr``

export const P = styled.h4`
  margin: ${theme.size.medium};
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
export const PriceDetail = styled.p`
  font-size: ${theme.size.mSmall};
  margin: 0;
`

export const Price = styled.h4`
`

export const PriceWrapper = styled.div`
  margin: ${theme.size.medium};
`