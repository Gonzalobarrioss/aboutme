import './App.css';
import { HashRouter , Routes, Route} from 'react-router-dom'

import React from 'react';

import Home from './pages';
import SigninPage from './pages/signin'

function App() {

  return (
    
    <HashRouter base='https://gonzalobarrioss.github.io/aboutme/'>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/signin' element={ <SigninPage />} />
      </Routes>
    </HashRouter>
    
  );
}

export default App;
