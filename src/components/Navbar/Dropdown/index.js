import React, { useState } from 'react'
import { Select, Option } from './styled'

export const Dropdown = (props) => {
  const { name } = props.selectedPackage ? props.selectedPackage : ''
  const isProgram = props.selectedPackage ? false : true
  const [items, setItems] = useState(props.data);
  const [value, setValue] = useState(name);

  return (
    <Select
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    >
      {items.map( item => (
        <Option key={item.id} value={item.name}>
          {item.name} {isProgram ? item.price : ''}
        </Option>
      ))}
    </Select>
  )
}

