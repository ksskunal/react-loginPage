import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi'

export const MyProfilePage = () => {
    const {username,password} = useContext(ContextApi)
  return (
    <>
     <div className="container border my-3">
        <div className="row">
            <h2 className='text-center my-3'>Welcome User</h2>
            <div className="col-md4">
                <h4 className='my-3'> User details</h4>
                <p><span className='fw-bold'>Username: </span>{username}</p>
                <p><span className='fw-bold'>Password: </span>{password}</p>
            </div>
        </div>
     </div>
    </>
  )
}
