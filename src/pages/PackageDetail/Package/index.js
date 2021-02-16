import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import programsData from '../../../data/programs.json'
import { H1 } from '../../../components/Header'
import { Program } from '../../../components/Program'
import { Wrapper, P, ProgramWrapper, Sum, ButtonWrapper } from './styled'
import isEmpty from 'ramda/src/isEmpty'
import { Link } from '../../../components/Link'

const PackageComponent = ({ currentPackage, programs }) => {
  const { price, name, id } = currentPackage
  const [packagesPrice, setPackagesPrice ] = useState(0)
  const [regularComponents, setRegularComponents ] = useState([])
  const [extraComponents, setExtraComponents] = useState([])

  useEffect(() => {
    const regularData = getPrograms(currentPackage.programs)
    const extrasData = getPrograms(programs, true)

    setPackagesPrice(calculateExtras(extrasData))
    setRegularComponents(regularData)
    setExtraComponents(extrasData)
  }, [programs, currentPackage])

  const calculateExtras = extrasData => {
    const sum = extrasData.reduce( (total, item) => total + item.props.price, 0)
    return sum
  }

  const getProgramPrice = (programName) => {
    const programPrice = parseInt(programsData.filter( item => item.name === programName)[0].price)
    return programPrice
  }

  const getPrograms = ( renderPrograms ) => {
    let programComponents = []

    for (const [program, count] of Object.entries(renderPrograms)) {
      for (let i = 0; i < count; i++) {
        programComponents.push(<Program name={program} price={getProgramPrice(program)}/>)
      }
    }
    return programComponents
  }

  return (
    <>
    <Wrapper>
        <H1>Your packages</H1>
        <Sum>Total price: {packagesPrice + parseInt(price)}$</Sum>
        <P>{name} ({price}$)</P>
        <ProgramWrapper>{regularComponents}</ProgramWrapper>
        {!isEmpty(extraComponents) &&
          <>
            <P>Your extra packages: {packagesPrice}$</P>
            <ProgramWrapper>{extraComponents}</ProgramWrapper>
          </>
        }
      </Wrapper>
      <ButtonWrapper>
        <Link to={`/${id}/order/regular=${price}&extras=${packagesPrice}`}>Order</Link>
      </ButtonWrapper>
    </>

  )
}

const mapStateToProps = state => ({
  programs: state.programs
})

export const Package = connect(mapStateToProps)(PackageComponent)
