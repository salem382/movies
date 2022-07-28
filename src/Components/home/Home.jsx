import { useEffect, useContext } from 'react';
import {movContext} from '../../context/moviesContext'

const Home = () => {

const {movies, setMovies, tv, setTv, person, setPErson, getData }  = useContext(movContext)
useEffect(() => {
    getData('movie', setMovies);
    getData('tv', setTv);
    getData('person', setPErson);
},[])

    return (
        <div className='home'>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <p className='fs-2'>Trending <br/> Movies <br/> To Watch Now </p>
                        <p style={{color:'#999'}}>Most Watched Movies By day</p>
                    </div>
                        {movies.slice(0,10).map((item, ind) => <div key={ind} className='col-md-2 text-center position-relative'>
                            <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100' alt=''/>
                            <p>{item.title}</p>
                            <p className='p-1 position-absolute end-0 top-0 bg-primary'>{item.vote_average}</p>
                        </div>)}
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <p className='fs-2'>Trending <br/> tv <br/> To Watch Now </p>
                        <p style={{color:'#999'}}>Most Watched Movies By day</p>
                    </div>
                        {tv.slice(0,10).map((item, ind) => <div key={ind} className='col-md-2 text-center position-relative'>
                            <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100' alt=''/>
                            <p>{item.title}</p>
                            <p className='p-1 position-absolute end-0 top-0 bg-primary'>{item.vote_average}</p>
                        </div>)}
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <p className='fs-2'>Trending <br/> People </p>
                    </div>
                        {person.slice(0,10).map((item, ind) => <div key={ind} className='col-md-2 text-center position-relative'>
                            <img src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} className='w-100' alt=''/>
                            <p>{item.name}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Home;