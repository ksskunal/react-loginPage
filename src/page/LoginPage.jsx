import React from 'react'
import Login from "../Component/Login"

const LoginPage = () => {
  return (
    <>
    <div className='form-center'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="logo192.png" alt="" />
                </div>
                <div className="col-md-6">
                    <Login/>
                </div>
            </div>
        </div>
    </div>
     </>
  )
}

export default LoginPage