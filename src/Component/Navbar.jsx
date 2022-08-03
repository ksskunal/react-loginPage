import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    let navigate = useNavigate()
    function handleLogout() {
        navigate('/')
    }
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Company Name</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Support</a>
        </li>
       
       
      </ul>
      <div>
        <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
