import data from '../../data/initial-packages-data.json'
import { CardComponent as Card } from '../../components/Card'
import { PackageWrap, H1, P } from './styled'

export const Packages = () => {
  console.log(data.packages)
  return (
    <>
    <H1>TV App</H1>
    <P>Select one of our amazing television packages. You can get selection of sports, kids and regular programs.</P>
    <PackageWrap>
      {data.packages.map((item) => (
        <Card 
          data={item}
          pic={item.name === "Tarif 1" ? '/kid.jpeg' : '/sport.png'}
        />
      ))}
      </PackageWrap>
    </>
  )
}
