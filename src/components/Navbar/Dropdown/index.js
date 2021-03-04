import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedProgram as setSelectedProgramAction } from '../../../store/selectedDropdownData/actions'
import { setSelectedPackage as setSelectedPackageAction } from '../../../store/selectedDropdownData/actions'
import { noProgramSelected as noProgramSelectedAction } from '../../../store/selectedDropdownData/actions'
import { Select, Option } from './styled'

// Why there is a completely different syntax than in other files? Did you copy it?
class DropdownComponent extends Component {
  state = {
    value: '',
    isPackage: this.props.currentPackage ? true : false,
  }

  componentDidMount() {
    // Check for package or program
    const { isPackage } = this.state
    if (isPackage) {
      this.setState({ value: this.props.currentPackage.name })
    }
  }

  componentDidUpdate() {
    try {
      const currentItem = this.getCurrentItem()
      // Set selected tv package and program data
      this.state.isPackage ? this.props.setSelectedPackage(currentItem) : this.props.setSelectedProgram(currentItem)
    } catch {
      // Set program data if none program is selected
      this.props.noProgramSelected()
    }
  }

  // Get a whole object of dropdown value
  getCurrentItem = () => {
    const currentItem = this.props.data.filter(
      (item) => item.name === this.state.value
    )[0]

    return currentItem
  }

  render() {
    const { isPackage } = this.state

    return (
      <Select
        value={this.state.value}
        onChange={(e) => {
          this.setState({ value: e.currentTarget.value })
        }}
      >
        { !isPackage ? (<Option name="none">none</Option>) : ''}
        {this.props.data.map((item) => (
          <Option key={item.id} value={item.name}>
            {item.name} {isPackage ? '' : item.price + '$'}
          </Option>
        ))}
      </Select>
    )
  }
}

const mapDispatchToProps = {
  setSelectedProgram: setSelectedProgramAction,
  setSelectedPackage: setSelectedPackageAction,
  noProgramSelected: noProgramSelectedAction,
}

export const Dropdown = connect(null, mapDispatchToProps)(DropdownComponent)
