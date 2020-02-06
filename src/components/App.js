import React from 'react'
import '../style/app.scss'

function App () {
  return (
    <main className='main'>
      <header className='main__header'>
        <h1 className='main__header__heading'> Trello</h1>
      </header>
      <div className='main__addList' title='click to add list'>Add List</div>
    </main>

  )
}

export default App
