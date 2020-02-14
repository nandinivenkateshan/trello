import React from 'react'
import '../style/app.scss'
import uuid from 'uuid/v4'
import { useSelector, useDispatch } from 'react-redux'
import { createBoard, boardName, boardLists } from '../actions'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App () {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  function handleCreateBoard (e) {
    dispatch(boardName(e.target.value))
  }

  function handleCreate (e) {
    e.preventDefault()
    const obj = {
      id: uuid(),
      boardName: state.boardName,
      editBoardName: false
    }
    dispatch(boardLists(obj))
    dispatch(boardName(''))
  }

  return (
    <main className='main'>
      <header className='main__header'>
        <h1 className='main__header__heading'> Trello</h1>
      </header>
      {!state.isCreateBoard
        ? (
          <div className='main__new-board' title='click to create a board' onClick={() => dispatch(createBoard(true))}>
            <p>Create new board</p>
            <p><FontAwesomeIcon icon={faPlusCircle} style={{ color: 'white' }} /> </p>
          </div>)
        : (
          <form className='main__create-new-board' onSubmit={e => handleCreate(e)}>
            <p>Creating a new board</p>
            <input
              type='text' name='board' placeholder='Enter the board name'
              className='create-board-input-box'
              onChange={e => handleCreateBoard(e)}
              value={state.boardName}
              required
            />
            <p>
              <button className='cancel-btn' onClick={() => dispatch(createBoard(false))}>Cancel</button>
              <button type='submit' className='create-btn'>Create</button>
            </p>
          </form>)}
    </main>

  )
}

export default App
