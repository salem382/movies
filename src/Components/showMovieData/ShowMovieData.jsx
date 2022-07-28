import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const ShowMovieData = () => {

    const params = useParams ();

    const [moviedata, setMovieData] = useState ({});

    const getData = async (id) => {

        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=db1fc41949e531723662d766a8409954&language=en-US`);
        setMovieData(data)
    }

    useEffect (() => {
        let x = params.movId;
        getData (x);
    },[])
    return (
        <>
         <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-4'>
                    <div>
                        <img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+moviedata.poster_path} alt=''/>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div>
                        <h2>{moviedata.original_title}</h2>
                        <h4 className='mt-3 mb-5' style={{color:'#999'}}>{moviedata.tagline}</h4>
                        <p className='mt-5' style={{color:'#999'}}>{moviedata.overview}</p>
                    </div>
                </div>
            </div>
         </div>   
        </>
    )
}

export default ShowMovieData;