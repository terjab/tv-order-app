import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import packagesData from '../../data/initial-packages-data.json'
import programsData from '../../data/programs.json'
import * as routes from '../../routes'
import { addProgram as addProgramAction } from '../../store/programs/actions'
import { setSelectedPackage as setSelectedPackageAction } from '../../store/selectedDropdownData/actions'

import { Package } from './Package'
import { Navbar } from '../../components/Navbar'
import { Link } from './styled'

const PackageDetailComponent = ({ match, addProgram, program, setSelectedPackage, tvPackage }) => {
  const { packageId } = match.params
  const [tvProgram, setTvProgram] = useState('')

  const setInitialPackage = () => {
    const currentPackage = packagesData.packages.filter(
      (item) => item.id == packageId
    )[0]
    console.log('currentPackage',currentPackage)
    setSelectedPackage(currentPackage)
  }

  const addSelectedProgram = () => {
    if(program) {
      addProgram(program)
      setTvProgram(program)
    }
  }

  useEffect(() => {
    setInitialPackage()
  }, [])

  return (
    <>
      {tvPackage &&
      <>
        <Navbar
          currentPackage={tvPackage}
          packages={packagesData.packages}
          programs={programsData}
          onAdd={addSelectedProgram}
        />
        <Link to={routes.HOMEPAGE}>{`<< Back to homepage`}</Link>
        <Package currentPackage={tvPackage} extraProgram={tvProgram} />
      </>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  program: state.selectedDropdownData.selectedProgram,
  tvPackage: state.selectedDropdownData.selectedPackage,
})

const mapDispatchToProps = {
  addProgram: addProgramAction,
  setSelectedPackage: setSelectedPackageAction,
}

export const PackageDetail = connect(mapStateToProps, mapDispatchToProps)(PackageDetailComponent)
