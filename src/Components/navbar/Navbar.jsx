/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {Link, useNavigate} from 'react-router-dom';
import { useContext, useEffect , useState} from 'react';
import jwtDecode from 'jwt-decode';
import {movContext} from '../../context/moviesContext'

const Navbar = ({isLogin, checkLogin}) => {

  const {handleSearch }  = useContext(movContext)
  const navigate = useNavigate();
  const [userName, setUserName] = useState('User')
  const handleLogout = () => {
    localStorage.clear();
    checkLogin();
    navigate('/login');
  }

  const handleSearchChange =  (e) => {
    handleSearch(e.target.value)
    navigate('/search');
  } 
  useEffect(() => {
    let x =  localStorage.getItem('token') !== null && jwtDecode(localStorage.getItem('token'));
    console.log(x)
    setUserName(x.first_name)
  },[])
    return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent shadow ">
    <div className="container-fluid">
    <a className="navbar-brand">Welcome {userName}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {isLogin !== null ? (
          <>
             <li className="nav-item">
            <Link to='home' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='movies' className="nav-link">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to='tvshow' className="nav-link">Tv Show</Link>
            </li>
            <li className="nav-item">
              <Link to='people' className="nav-link">People</Link>
            </li>
          </>
        ) : ('')}
       
      </ul>
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center'>
        <input onChange={(e) => handleSearchChange(e) } style={{width:'215px'}} className='form-control me-3' placeholder='Search'/>
        <li><FontAwesomeIcon className = 'mx-2' icon= {faFacebookF}/></li>
        <li><FontAwesomeIcon className = 'mx-2' icon= {faYoutube}/></li>
        <li><FontAwesomeIcon className = 'mx-2' icon= {faInstagram}/></li>
        {isLogin === null ? <>
          <li className="nav-item">
          <Link to='login' className="nav-link">Log In</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link">Register</Link>
        </li>
        </> : ''}

        <li className="nav-item">
          <a className="nav-link" onClick ={handleLogout}>Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;