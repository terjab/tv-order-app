import { createStore, combineReducers, compose } from 'redux'
import tvPackage from './tvPackage'
import programs from './programs'
import selectedDropdownData from './selectedDropdownData'

const reducer = combineReducers({
  selectedDropdownData,
  tvPackage,
  programs,
})


// It will be nice to init here some default initialState
// When you are using this nice tool - aka Redux
// Why you are not using helper tools?
// Try something like this
// Checkout and install this https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl

export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    reducer,
    composeEnhancers()
  )
}
