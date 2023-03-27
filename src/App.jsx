import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Board from './pages/Board'
import {store} from './store/root'

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
