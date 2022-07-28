import { useState } from 'react';
import axios from 'axios';
import {createContext} from 'react'

export let movContext = createContext('')

const MoviesContextProvider = (props) => {
    

    const [movies, setMovies] = useState([]);
    const [tv, setTv] = useState([]);
    const [person, setPErson] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    

    const handleSearch = async (searchedWord) => {
        const {data} = await axios.get(`http://api.tmdb.org/3/search/movie?api_key=db1fc41949e531723662d766a8409954&query=${searchedWord}&year=2008&language=en`);
        setSearchedMovies([...data.results]);
    }
    const getData = async (type, x) => {
    
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=db1fc41949e531723662d766a8409954`);
                               
        x([...data.results]);
    }
    
    
    return (
        <>
            <movContext.Provider value={{movies, setMovies, tv, setTv, person, setPErson, getData, searchedMovies, handleSearch}}>
                {props.children}
            </movContext.Provider>
        </>
    )
}

export default MoviesContextProvider;