import { Nav, NavItem, Desciption } from './styled'
import { Dropdown } from './Dropdown'
import Button from '../../components/Button'

export const Navbar = ({ currentPackage, packages, programs, onAdd }) => {
  return (
    <Nav>
      <NavItem>
        <Desciption>Change tarif</Desciption>
        <Dropdown currentPackage={currentPackage} data={packages} />
      </NavItem>
      <NavItem>
        <Desciption>Add another program</Desciption>
        <Dropdown data={programs} />
      </NavItem>
      <NavItem>
        <Button onClick={onAdd}>Add</Button>
      </NavItem>
    </Nav>
  )
}
