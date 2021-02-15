import packagesData from '../../data/initial-packages-data.json'
import programsData from '../../data/programs.json'
import { Package } from './Package'
import { Navbar } from '../../components/Navbar'
import Button from '../../components/Button/index'
import { Wrapper } from './styled'

export const PackageDetail = ({ match }) => {
  const { packageId } = match.params
  const currentPackage = packagesData.packages.filter((item) => item.id == packageId)[0]

  return (
    <>
      <Navbar selectedPackage={currentPackage} packages={packagesData.packages} programs={programsData} />
      <Package currentPackage={currentPackage} />
      <Wrapper>
        <Button>Order</Button>
      </Wrapper>
    </>
  )
}
