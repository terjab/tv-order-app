import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import programsData from '../../../data/programs.json'
import { H1 } from '../../../components/Header'
import { Program } from '../../../components/Program'
import { Wrapper, P, ProgramWrapper, Sum, ButtonWrapper } from './styled'
import isEmpty from 'ramda/src/isEmpty'
import { Link } from '../../../components/Link'
import { uuidv4 } from "./../../../common/helpers/idGenerator"

const PackageComponent = ({ currentPackage, programs }) => {
  const { price, name, id } = currentPackage
  const [packagesPrice, setPackagesPrice ] = useState(0)
  const [regularComponents, setRegularComponents ] = useState([])
  const [extraComponents, setExtraComponents] = useState([])

  useEffect(() => {
    const regularData = getPrograms(currentPackage.programs)
    const extrasData = getPrograms(programs)

    setPackagesPrice(calculateExtras(extrasData))
    setRegularComponents(regularData)
    setExtraComponents(extrasData)
  }, [programs, currentPackage])

  const calculateExtras = extrasData => {
    extrasData.reduce( (total, item) => total + item.props.price, 0)
  }

  const getProgramPrice = (programName) => {
    parseInt(programsData.filter( item => item.name === programName)[0].price)
  }

  // It will be better to pass id with whole data not creating uuid because of memory
  // But you definitely need key here
  const getPrograms = ( renderPrograms ) => {
    console.log("Here")
   return Object.entries(renderPrograms).map(object => {
     return [...Array(object[1])].map(() => {
       const programs = <Program key={"Yolo"} name={object[0]} price={getProgramPrice(object[0])}/>
       console.log(programs)
       return programs
     })
   })
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
