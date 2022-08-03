import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {  
    let navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState(null)
    function handlesubmit(e) {
        e.preventDefault()
        const record  = { username,password }
        if(record.username === 'kunal123'){
            navigate('/home')
        }else{
          setError('Your Username is Not Correct')
        }
        console.log(record)

    }

    return (
        <>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique inventore itaque optio animi sint dolore ad, labore, commodi possimus reiciendis nam magnam laboriosam.</p>
        
            <form action="" onSubmit={handlesubmit} >
                <span className='error-block'>{error}</span><br />
                <label className='form-label'  htmlFor="">Username</label>
                <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" className='form-control' name="" id="" />
                
                <label className='form-label' htmlFor="">Password</label>
                <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  type="text" className='form-control' name="" id="" />
                <button type="submit" className='form-control btn btn-primary my-2'>Login</button>

            </form>

        </>
    )
}

export default Login