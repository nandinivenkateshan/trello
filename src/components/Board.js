import React from 'react'
import '../style/app.scss'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { boardName } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

function Board () {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  function handleChangeBoardName (e) {
    dispatch(boardName(e.target.value))
  }

  return (

    state.boardLists.map(item => {
      return (
        <section className='boardList' key={item.id}>
          <div className='board'>
            <textarea
              className='board__textarea'
              value={item.boardName}
              onChange={e => handleChangeBoardName(e)}
            />
            <FontAwesomeIcon icon={faPen} className='fontAwesome-pen' />
          </div>
        </section>
      )
    })

  )
}

export default Board
