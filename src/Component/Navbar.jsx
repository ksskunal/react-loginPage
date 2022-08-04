import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ContextApi} from '../ContextApi'
import { Button } from '@mui/material'

export const Navbar = () => {
    const { setUsername,setpassword, loginStatus,setLoginStatus} = useContext(ContextApi)
    let navigate = useNavigate()
    function handleLogout() {
      setUsername( window.localStorage.removeItem('username'))
     setpassword( window.localStorage.removeItem('password'))
     setLoginStatus( window.localStorage.setItem('loginStatus' , 0))

        navigate('/')
    }
  return (
    <>
    {loginStatus === '1'?
    <>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Company Name</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Support</Link>
        </li>
       
       
      </ul>
      <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/myprofile">My Profile</Link>
        </li>
        <Button variant="contained"  onClick={handleLogout}>Logout</Button>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </>:<></>
    }
  
    </>
  )
}
