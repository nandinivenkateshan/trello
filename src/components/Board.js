import React from 'react'
import '../style/app.scss'
import { useSelector } from 'react-redux'

function Board () {
  const state = useSelector(state => state)
  return (
    <ul className='board-Lists'>
      {state.boardLists.map(item => {
        return (
          <li key={item.id} className='board'>
            <textarea>
              <h3> {item.boardName} </h3>
            </textarea>

          </li>
        )
      })}
    </ul>

  )
}

export default Board
