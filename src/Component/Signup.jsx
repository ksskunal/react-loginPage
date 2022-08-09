import React, { useState } from 'react'

export const Signup = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setemail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState()
    const [age, setAge] = useState('')
    const [error, setError] = useState('')
    const [contacterror, setContacterror] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        if(firstname.trim() === ''){
            setError('Please dont leave empty fields ')
        }
        if(lastname.trim() === ''){
            setError('Please dont leave empty fields ')
        }
        if(email.trim() === ''){
            setError('Please dont leave empty fields ')
        }
        if(username.trim() === ''){
            setError('Please dont leave empty fields ')
        }
        if(password.trim() === ''){
            setError('Please dont leave empty fields ')
        }
        if(address.trim() === ''){
            setError('Please dont leave empty fields ')
        }
      
        if(age.trim() === ''){
            setError('Please dont leave empty fields ')
        }
        if(firstname.length >20){
            setError('First name and last name Should be less than 20 Characters')
        }

        if(contact.length > 10 || contact.length < 10 ){
            setError("please enter a valid contact number")
        }

     


        setTimeout(() => {
            setError('');
          }, 2000);
          setTimeout(() => {
            setContacterror('');
          }, 2000);
        
        
    }
    return (
        <>
            <form action="" className='' onSubmit={(e)=>{handleSubmit(e)}}>
                <div className='mb-4'>
                    <span className='error-block'>{error}</span>
                    <span className='error-block'>{contacterror}</span>
                </div>
                <div className="row ">
                    
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor='' className="form-label">First Name</label>
                                <input onChange={(e)=>{setFirstname(e.target.value)}} value={firstname}  type="text" className="form-control" placeholder="" aria-label="First name" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input onChange={(e)=>{setLastname(e.target.value)}} value={lastname} type="text" className="form-control" placeholder="" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" className="form-control" id="inputEmail4" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label">Username</label>
                                <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" className="form-control" id="inputPassword4" />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input onChange={(e)=>{setAddress(e.target.value)}} value={address} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label">Contact No.</label>
                                <input onChange={(e)=>{setContact(e.target.value)}} value={contact} type="text" className="form-control" placeholder="" aria-label="First name" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input onChange={(e)=>{setAge(e.target.value)}} value={age} type="number" className="form-control" placeholder="" aria-label="Last name" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <button className='btn btn-primary form-control mt-4' type="submit">Create an Account</button>
                            </div>
                        </div>




                    </div>
               
            </form>
        </>
    )
}
