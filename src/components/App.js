import React from 'react'
import '../style/app.scss'
import uuid from 'uuid/v4'
import { useSelector, useDispatch } from 'react-redux'
import { createBoard, boardName, boardLists } from '../actions'

function App () {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  function handleCreateBoard (e) {
    dispatch(boardName(e.target.value))
  }

  function handleCreate () {
    const obj = {
      id: uuid(),
      boardName: state.boardName
    }
    dispatch(boardLists(obj))
  }

  return (
    <main className='main'>
      <header className='main__header'>
        <h1 className='main__header__heading'> Trello</h1>
      </header>
      {!state.isCreateBoard
        ? (
          <div className='main__new-board' title='click to create a board'>
            <p onClick={() => dispatch(createBoard())}>Create new board</p>
          </div>)
        : (
          <section className='main__create-new-board'>
            <p>Creating a new board</p>
            <input
              type='text' name='board' placeholder='Enter the board name'
              className='create-board-input-box'
              onChange={(e) => handleCreateBoard(e)}
            />
            <p>
              <button className='cancel-btn'>Cancel</button>
              <button className='create-btn' onClick={handleCreate}>Create</button>
            </p>
          </section>)}
    </main>

  )
}

export default App
