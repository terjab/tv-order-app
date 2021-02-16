import { createStore, combineReducers } from 'redux'
import tvPackage from './tvPackage'
import programs from './programs'
import selectedDropdownData from './selectedDropdownData'

const reducer = combineReducers({
  selectedDropdownData,
  tvPackage,
  programs,
})

export const store = createStore(reducer)
