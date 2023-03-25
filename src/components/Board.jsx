import React from 'react'
import Header from './Header'
import TrelloList from './TrelloList'
import '../App.css'

function Board() {
  return (
    <div className='board'>
      <Header />
      <TrelloList/>
    </div>
  )
}

export default Board