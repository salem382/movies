import Register from './Components/register/Register';
import Home from './Components/home/Home';
import Login from './Components/login/Login';
import Movies from './Components/movies/Movies';
import People from './Components/people/People';
import TvShow from './Components/show/TvShow';
import Notfound from './Components/notfound/Notfound';
import Navbar from './Components/navbar/Navbar';
import ProtectedRoute from './Components/protectedroute/ProtectedRoute';
import ShowMovieData from './Components/showMovieData/ShowMovieData';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesContextProvider from './context/moviesContext';
import  Search  from './Components/search/Search';

function App() {

  const [isLogin, setLogin] = useState('');
  const checkLogin = () => {
    let x = localStorage.getItem('token');
    setLogin(x);
  }

  useEffect(() => {
    checkLogin();
  },[])

  return (
    <div className="App">
      <MoviesContextProvider>
      <Navbar isLogin = {isLogin} checkLogin = {checkLogin}/>
      <Routes>
          <Route path='/' element= {<Register />}></Route>
          <Route path='home' element= {<ProtectedRoute><Home /></ProtectedRoute>}></Route>
          <Route path='login' element= {<Login checkLogin = {checkLogin} />}></Route>
          <Route path='movies' element= {<ProtectedRoute><Movies /></ProtectedRoute> }></Route>
          <Route path='people' element= {<ProtectedRoute><People /></ProtectedRoute>}></Route>
          <Route path='tvshow' element= {<ProtectedRoute><TvShow /></ProtectedRoute>}></Route>
          <Route path='search' element= {<ProtectedRoute><Search /></ProtectedRoute>}></Route>
          <Route path='mov/:movId' element= {<ShowMovieData />}></Route>
          <Route path='*' element= {<Notfound />}></Route>
      </Routes>
      </MoviesContextProvider>
    </div>
  );
}

export default App;
