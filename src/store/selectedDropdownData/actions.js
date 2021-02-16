export const SET_SELECTED_PROGRAM = 'programs/SET'
export const SET_SELECTED_PACKAGE = 'package/SET'
export const NO_PROGRAM_SELECTED = 'programs/NO_PROGRAM_SELECTED'

export const setSelectedProgram = program => ({
  type: SET_SELECTED_PROGRAM,
  payload: program,
})

export const setSelectedPackage = tvPackage => ({
  type: SET_SELECTED_PACKAGE,
  payload: tvPackage,
})

export const noProgramSelected = () => ({
  type: NO_PROGRAM_SELECTED,
})