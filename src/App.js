
import './App.css';
import data from './Data/data';
import Navbar from './components/Navbar';
import Choosepage from './components/choosePage';
import DetailPage from './detailComponents/detailPage';
import React from 'react';
import { Routes, Route} from 'react-router';
import Home from './components/home';
import Notfound from './components/notFound';

function App() {
  
  return (
    <div className="App container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='category/:typeChoose' element={<Choosepage/>}/>
        <Route path='detail/:id' element={<DetailPage/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
