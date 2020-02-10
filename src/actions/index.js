import * as actionType from './actionTypes'

export function createBoard () {
  return {
    type: actionType.CREATE_BOARD,
    payload: true
  }
}

export function boardName (val) {
  return {
    type: actionType.BOARD_NAME,
    payload: val
  }
}

export function boardLists (val) {
  return {
    type: actionType.BOARD_LISTS,
    payload: val
  }
}
