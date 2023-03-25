import React from 'react'
import './App.css'
import Home from './components/Home'
import Board from './components/Board'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {



  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <div id='app'>
          <Router>
            <Routes>
              <Route path='/' element={<Board />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
        </div>
      </Provider>
    </DndProvider>
  )
}


export default App;
