import { useState,useEffect } from 'react';
import './App.css';
import TitleList from'./Components/TitleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataJson from './data.json'
import { 
  Routes, Route, Link, NavLink, useParams, Outlet
} from "react-router-dom";
import NavBar from './Components/navbar'; 
import MovieList from './Components/MovieList';
import MovieBigPoster  from './Components/MovieBigPoster';
import { ListGroup } from 'react-bootstrap';
import UserProfile from './Components/UserProfile';
import PosterCardList from'./Components/PosterCardList';
import LogIn from './Components/LogIn';
import UsernameContext from './Components/UsernameContext';
import {useContext} from 'react';
import Main from './Components/Main';
import BigMovie from './Components/BigMovie';
import Search from './Components/Search';




function App() {

  return (
    <div className="root">
      {/* <UsernameContext.Provider> */}
      <NavBar/>
      { /* ... and here is what happens when you click them */ }
      <Routes>
      <Route path="/"     element={<Main />} />
      <Route path="/user/:userName"   element={<UserProfile/>} />
      <Route path="/user/login"   element={<LogIn/>} />
      <Route path="/user/bookmarks/:userName"   element={<TitleList/>} />
      <Route path="/test/:userName"   element={<PosterCardList/>} />
      <Route path="/search/:search"   element={<Search/>} />
      <Route path="/movies/:titleId"   element={<BigMovie/>} />
      <Route path="/movie"   element={<BigMovie/>} />
      </Routes>
      {/* </UsernameContext.Provider> */}
    </div>
  );
  }
export default App;
