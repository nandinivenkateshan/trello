import React from 'react'
import '../style/app.scss'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { boardName,  boardLists } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

function Board () {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  function handleChangeBoardName (e, id) {
    let newState = state.boardLists.filter(item => item.id === id)
    newState = newState.map(item => {
      item.editBoardName = true
      return item
    }
    )
    dispatch(boardLists(newState))
    console.log(newState)
    // dispatch(boardName(e.target.value))
  }

  return (
    <section className='boardList'>
      {state.boardLists.map(item => {
        return (
          <div className='board' key={item.id}>
            {item.editBoardName
              ? <textarea />
              : (
                <>
                  <div className='board__textarea'>
                    {item.boardName}
                  </div>
                  <FontAwesomeIcon
                    icon={faPen} className='board__fontAwesome-pen'
                    onClick={e => handleChangeBoardName(e, item.id)}
                  />
                </>
              )}
          </div>
        )
      })}
    </section>
  )
}

export default Board
