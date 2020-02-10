import initialState from '../store'

 const createBoard = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOARD' :
      return { ...state, isCreateBoard: action.payload }
  }
}

export default createBoard
