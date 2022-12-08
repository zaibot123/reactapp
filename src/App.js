import { useState,useEffect } from 'react';
import './App.css';
import TitleList from'./Components/TitleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataJson from './data.json'
import { 
  Routes, Route, Link, NavLink, useParams, Outlet
} from "react-router-dom";
import NavBar from './Components/navbar'; 
import PopularList from './Components/PopularList';
import MovieBigPoster  from './Components/MovieBigPoster';
import { ListGroup } from 'react-bootstrap';
import UserProfile from './Components/UserProfile';

import PosterCardList from'./Components/PosterCardList';



function App() {

function Main () {
let [popularMovies, setPopularMovies]=useState(null);
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:5001/api/movies/popular');
    const newData = await response.json();
    setPopularMovies(newData);  
  };
  fetchData();
},[]);

if (popularMovies) {
  console.log(typeof(popularMovies))



  return <PopularList PopularList={popularMovies} handleClick={BigMovie}/>
} else {
  return null;
}
}



function BigMovie () {
  const { uid} = useParams();
  return(
  <div>
<MovieBigPoster MovieID={String(uid)} />
  </div>
  )
  }



  function Search () {
     let [result,setResult]=useState(null)
     let [status, setStatus]=useState('Loading')

    const {search} = useParams()
    
  useEffect(() => {
    const fetchData = async () => { 
      const response = await fetch("http://localhost:5001/api/movies?searchtype=simple&username=Maria&title="+search+"&page=1&pageSize=10");
      const newData = await response.json();  
      setResult(newData['items'])
      setStatus('Done')
    };
    fetchData();
  },[result]);

  if (status==="Done") {
    return <TitleList listOfResults={result}/>
  } else {
    return <h1>Loading</h1>;
  }
}



  
  return (
    <div className="root">
      <NavBar/>
      { /* ... and here is what happens when you click them */ }
      <Routes>
      <Route path="/"     element={<Main />} />
      
      <Route path="/user/:userName"   element={<UserProfile/>} />
      <Route path="/test/:userName"   element={<PosterCardList/>} />
      <Route path="/search/:search"   element={<Search/>} />
      <Route path="api/movies/:uid"   element={<BigMovie/>} />
      <Route path="/movie"   element={<BigMovie/>} />
      </Routes>
    </div>

  );
  }


export default App;
