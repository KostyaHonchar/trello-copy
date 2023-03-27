import React from 'react'
import '../App.css'
import Header from '../layout/Header'

function Home() {
   return (
      <div>
         <Header />
         <div className='home'>
            <h1>Hello, welcome to a <a
               className='greets'
               href='https://trello.com/' target={'_blank'}>
               Trello</a> clone built with React/JS</h1>
            <ul>
               <li>Go to the "Your board" to view it and start managing your tasks</li>
               <li>In your board you can create as many cards as you want to help you manage your project tasks</li>
               <li>This project has been developed with the aim of studying and praciting web development, interfaces building and styling, the source code can be found here</li>
            </ul>
         </div>
      </div>
   )
}

export default Home