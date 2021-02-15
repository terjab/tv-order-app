import styled from 'styled-components'
import theme from '../../common/theme'

const handleColorType = programName => {
    switch(programName) {
      case 'kids':
        return theme.color.yellow
        break
      case 'sport':
        return theme.color.green
        break
      default:
        return theme.color.red
  }
}

export const Wrapper = styled.div`
  margin: ${theme.size.large};
  text-align: center;
  display: inline-block;
  height: 100px;
  width: 100px;
  background-color: ${props => handleColorType(props.programName)};
`