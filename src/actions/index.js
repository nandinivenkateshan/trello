import * as actionType from './actionTypes'

export function createBoard () {
  return {
    type: actionType.CREATE_BOARD,
    payload: true
  }
}
