import React from 'react';
import Main from './components/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ModelY from './components/ModelY';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/ModelY' element={<ModelY/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
