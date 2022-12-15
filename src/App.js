
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
import BigMovie from './Components/BigMovie';
import Search from './Components/Search';
import ListWithPoster from './Components/ListWithPosterFetch';
import UsernameContext from './Components/UsernameContext';
import { useContext } from 'react';





function App() {

 

  return (
    <div className="root">
     
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
      <Route path="/test"   element={<ListWithPoster/>} />
      </Routes>
     
    </div>
  );
  }
export default App;
