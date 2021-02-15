import data from '../../data/initial-packages-data.json'
import { Package } from './Package'

export const PackageDetail = ({ match }) => {
  const { packageId } = match.params
  const currentPackage = data.packages.filter((item) => item.id == packageId)[0]

  return (
    <>
      <Package currentPackage={currentPackage} />
    </>
  )
}
