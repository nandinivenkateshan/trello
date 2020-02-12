const initialState = {
  isCreateBoard: false,
  boardName: '',
  boardLists: []
}

const createBoard = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOARD' :
      return { ...state, isCreateBoard: action.payload }
    case 'BOARD_NAME' :
      return { ...state, boardName: action.payload }
    case 'BOARD_LISTS' :
      return { ...state, boardLists: state.boardLists.concat(action.payload) }
    default: console.log('Error in reducer function')
  }
  return state
}

export default createBoard
