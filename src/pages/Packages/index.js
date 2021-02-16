import data from '../../data/initial-packages-data.json'
import { CardComponent as Card } from '../../components/Card'
import { PackageWrap, P } from './styled'
import { H1 } from '../../components/Header/index'

export const Packages = () => {
  return (
    <>
      <H1>TV App</H1>
      <P>
        Select one of our amazing television packages. You can get selection of
        sports, kids and regular programs.
      </P>
      <PackageWrap>
        {data.packages.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </PackageWrap>
    </>
  )
}
