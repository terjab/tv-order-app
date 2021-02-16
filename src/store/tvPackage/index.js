import { UPDATE_PACKAGE } from './actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PACKAGE:
      return action.payload
    default:
      return state
  }
}

export default reducer
