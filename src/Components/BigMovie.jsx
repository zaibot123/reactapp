import MovieBigPoster from './MovieBigPoster';
import {useParams} from 'react-router-dom';

function BigMovie () {
    const {titleId} = useParams();
    return(
    <div>
  <MovieBigPoster MovieID={String(titleId)} />
    </div>
    )
    }
    export default BigMovie;