import styled from 'styled-components'
import theme from '../../../common/theme'

export const Wrapper = styled.div`
  margin-bottom: ${theme.size.xLarge};
`

export const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${theme.size.xLarge};
`

export const P = styled.h4`
  text-align: center;
  color: ${theme.color.white};
`

export const Sum = styled.h4`
  text-align: center;
  margin-bottom: ${theme.size.medium};
`