export const PackageDetail = ({ match }) => {
  const { packageId } = match.params

  return <h1>You're ordering this awesome package: {packageId} </h1>
}
