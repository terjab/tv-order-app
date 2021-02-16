import { ADD_PROGRAM } from './actions'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROGRAM:
      return {
        ...state,
        [action.payload.name]: (state[action.payload.name] || 0) + 1,
      }
    default:
      return state
  }
}

export default reducer
