import React from 'react'
import Header from '../layout/Header'
import TrelloList from '../components/TrelloLists/TrelloLists'
import '../App.css'

function Board() {
  return (
    <div className='board'>
      <Header />
      <TrelloList />
    </div>
  )
}

export default Board