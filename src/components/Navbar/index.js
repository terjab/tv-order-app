import { Nav, NavItem, Desciption } from './styled'
import { Dropdown } from './Dropdown'
import Button from '../../components/Button'

export const Navbar = ({ selectedPackage, packages, programs }) => {
  return (
      <Nav>
        <NavItem>
          <Desciption>Change tarif</Desciption>
          <Dropdown selectedPackage={selectedPackage} data={packages} />
        </NavItem>
        <NavItem>
          <Desciption>Add another program</Desciption>
          <Dropdown data={programs} />
        </NavItem>
        <NavItem>
          <Button>Add</Button>
        </NavItem>
      </Nav>
  )
}