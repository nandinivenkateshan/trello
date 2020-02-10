import React from 'react'
import '../style/app.scss'
import { useSelector, useDispatch } from 'react-redux'
import { createBoard } from '../actions'

function App () {
  const isCreateBoard = useSelector(state => state.isCreateBoard)
  const dispatch = useDispatch()
  function handleCreateBoard () {
    dispatch(createBoard())
  }

  return (
    <main className='main'>
      <header className='main__header'>
        <h1 className='main__header__heading'> Trello</h1>
      </header>
      {!isCreateBoard
        ? (
          <div className='main__new-board' title='click to create a board'>
            <p onClick={handleCreateBoard}>Create new board</p>
          </div>)
        : (
          <section className='main__create-new-board'>
            <p>Creating a new board</p>
            <input type='text' name='board' placeholder='Enter the board name' className='create-board-input-box' />
            <p>
              <button className='cancel-btn'>Cancel</button>
              <button className='create-btn'>Create</button>
            </p>
          </section>)}
    </main>

  )
}

export default App
