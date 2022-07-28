import { useEffect, useContext } from 'react';
import {movContext} from '../../context/moviesContext'


const TvShow = () => {
    
   const {getData, tv, setTv} = useContext(movContext)
   console.log (tv)
    useEffect(() => {
        getData('tv', setTv);
        console.log (tv)
    },[])

    return (
        <div className='tvShow'>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <p className='fs-2'>Trending <br/> tv <br/> To Watch Now </p>
                        <p style={{color:'#999'}}>Most Watched Movies By day</p>
                    </div>
                        {tv.map((item, ind) => <div key={ind} className='col-md-2 text-center position-relative'>
                            <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100' alt=''/>
                            <p>{item.title}</p>
                            <p className='p-1 position-absolute end-0 top-0 bg-primary'>{item.vote_average}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default TvShow;