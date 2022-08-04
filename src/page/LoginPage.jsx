import React from 'react'
import Login from "../Component/Login"
import './LoginPage.css'

const LoginPage = () => {
  return (
    <>
    <div className='form-center' >
        <div className="container">
            <div className="row border border-primary p-5 rounded myshadow">
                <div className="col-md-4">
                    <img className='mx-auto d-block pe-5' src="logo192.png" alt="" />
                    <h2>Welcome to Our Website</h2>
                </div>
                <div className="col-md-6 offset-md-2">
                    <Login/>
                </div>
            </div>
        </div>
    </div>
     </>
  )
}

export default LoginPage