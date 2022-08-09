import React from 'react'
import { Signup } from '../Component/Signup'

export const SignupPage = () => {
  return (
    <>
    <div className="container my-5">
        <div className="row  border border-primary p-5 rounded myshadow ">
            <div className='col-md-8 offset-md-2 mb-4 '>
                    <h2 className='text-center my-5'>Create An Account</h2>
                    <Signup />
            </div>
        </div>
    </div>
    </>
  )
}
