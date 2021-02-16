import { SET_SELECTED_PROGRAM, SET_SELECTED_PACKAGE, NO_PROGRAM_SELECTED } from './actions'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PROGRAM:
      return {
        ...state,
        selectedProgram: action.payload
      }
      case SET_SELECTED_PACKAGE:
        return {
          ...state,
          selectedPackage: action.payload
        }
    case NO_PROGRAM_SELECTED:
      return initialState
    default:
      return state
  }
}

export default reducer