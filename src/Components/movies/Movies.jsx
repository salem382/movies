
import { useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {movContext} from '../../context/moviesContext'

const Movies = () => {

    const {movies, getData, setMovies} = useContext(movContext);

    useEffect(() => {
        getData('movie', setMovies);
    }, [])
    

    return (
        <div>
            <div className='container-fluid'>
                <div className='row mt-5'>
                        <div className='col-md-4'>
                            <p className='fs-2'>Trending <br/> Movies <br/> To Watch Now </p>
                            <p style={{color:'#999'}}>Most Watched Movies By day</p>
                        </div>
                            {movies.map((item, ind) => <div key={ind} className='col-md-2 text-center position-relative'>
                               <Link to={`/mov/${item.id}`}><img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100' alt=''/></Link>
                                <p>{item.title}</p>
                                <p className='p-1 position-absolute end-0 top-0 bg-primary'>{item.vote_average}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Movies;