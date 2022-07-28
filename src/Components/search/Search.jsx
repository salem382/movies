import { useContext } from "react";
import {movContext} from '../../context/moviesContext';

const Search = () => {

    const {searchedMovies} = useContext(movContext);
    return (
        <>
        {searchedMovies.length > 0 ? (
            <div >
            <div className='container-fluid'>
                <div className='row mt-5'>
                    {searchedMovies.map((item, ind) => <div key={ind} className='col-md-2 text-center position-relative'>
                        <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100' alt=''/>
                        <p>{item.title}</p>
                        <p className='p-1 position-absolute end-0 top-0 bg-primary'>{item.vote_average}</p>
                    </div>)}
                </div>
            </div>
        </div>
        ):(
            <>
                <div className="text-center mt-5">No Movie Match Search</div>
            </>
        )}
        </>
    )
}
export default Search;