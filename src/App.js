
import './App.css';
import TitleList from'./Components/TitleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Routes, Route, Link, NavLink, useParams, Outlet
} from "react-router-dom";
import NavBar from './Components/navbar'; 
import UserProfile from './Components/UserProfile';
import PosterCardList from'./Components/PosterCardList';
import LogIn from './Components/LogIn';
import Main from './Components/Main';

import Search from './Components/Search';
import ListWithPoster from './Components/ListWithPosterFetch';
import UsernameContext from './Components/UsernameContext';
import { useContext, useState, createContext} from 'react';
import RegisterUser from './Components/RegisterUser';
import ActorSearch from './Components/ActorSearch';
import EditUser from './Components/EditUser';
import ActorSingleView from './Components/ActorSingleView';
import Wordcloud from './Components/WordCloud';
import BestSearch from './Components/BestSearch';
import Footer from './Components/Footer';
import MovieBigPoster from './Components/MovieBigPoster';




function App() {

  const [user, setUser] = useState("Guest");

  return (
    <div className="root">
     <UsernameContext.Provider value={{getUser:user, setAUser:setUser}}>
      <NavBar/>
      { /* ... and here is what happens when you click them */ }
      <Routes>
      <Route path="/"     element={<Main />} />
      <Route path="/user/:userName"   element={<UserProfile/>} />
      <Route path="/user/login"   element={<LogIn/>} />
      <Route path="/user/bookmarks/:userName"   element={<TitleList/>} />
      <Route path="/test/:userName"   element={<PosterCardList/>} />
      <Route path="/movies/search/:search"   element={<Search/>} />
      <Route path="/actors/search/:search"   element={<ActorSearch/>} />
      <Route path="/best/search/:search"   element={<BestSearch/>} />
      <Route path="/movies/:titleId"   element={<MovieBigPoster/>} />
      <Route path="/movie"   element={<MovieBigPoster/>} />
      <Route path="/register"   element={<RegisterUser/>} />
      <Route path="/user/edit/:userName"   element={<EditUser/>} />
      <Route path="/actor/:id"   element={<ActorSingleView/>} />
      </Routes>
      <Footer/>
      </UsernameContext.Provider>
    
    </div>
  );
  }
export default App;
