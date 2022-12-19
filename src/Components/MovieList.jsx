
import MovieWithRating from "./MovieWithRating.jsx";
import MovieNoRating from "./MovieNoRating.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BigMovie from "./BigMovie.jsx";

const MovieList =  ({PopularList,Title}) =>{
    const first50Movies = PopularList.slice(0, 49);
    const last50Movies = PopularList.slice(50, 100);
if (Title)
{
    return (
     <>
    <div className="list-title">
      <h1>{Title}</h1>
    </div>

   
    <div className = "rowList">
    <Row >
    <Col > {first50Movies.map(PopularMovie => <MovieWithRating PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)}</Col>
    <Col>  {last50Movies.map(PopularMovie => <MovieWithRating PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)}</Col>

    </Row>
    </div>
   
    </>
    )
}
else {
return(
    <>
    {PopularList.map(PopularMovie => <MovieNoRating PopularMovie={PopularMovie} key={PopularMovie.url} handleClick={BigMovie} />)}
    </>
)}
}
    export default MovieList;