
import MovieWithRating from "./MovieWithRating.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MovieList =  ({PopularList,Title}) =>{
    const first50Movies = PopularList.slice(0, PopularList.length/2);
    const last50Movies = PopularList.slice(PopularList.length/2, PopularList.length);

    return (
     <>
    <div className="list-title">
      <h1>{Title}</h1>
    </div>
    <div className = "rowList">
    <Row >
    <Col > {first50Movies.map(PopularMovie => <MovieWithRating 
            PopularMovie={PopularMovie} key={PopularMovie.url}/>)}</Col>
    <Col>  {last50Movies.map(PopularMovie => <MovieWithRating 
            PopularMovie={PopularMovie} key={PopularMovie.url}/>)}</Col>
    </Row>
    </div>
    </>
    )
}
    export default MovieList;