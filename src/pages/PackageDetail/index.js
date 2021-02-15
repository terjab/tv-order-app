import packagesData from '../../data/initial-packages-data.json'
import programsData from '../../data/programs.json'
import { Package } from './Package'
import { Navbar } from '../../components/Navbar'
import Button from '../../components/Button/index'
import { Wrapper, Link } from './styled'
import { HOMEPAGE } from '../../routes'

export const PackageDetail = ({ match }) => {
  const { packageId } = match.params
  const currentPackage = packagesData.packages.filter((item) => item.id == packageId)[0]

  return (
    <>
      <Navbar selectedPackage={currentPackage} packages={packagesData.packages} programs={programsData} />
      <Link to={HOMEPAGE}>{`<< Back to homepage`}</Link>
      <Package currentPackage={currentPackage} />
      <Wrapper>
        <Button>Order</Button>
      </Wrapper>
    </>
  )
}
