import React, { useState } from 'react'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography } from 'mdb-react-ui-kit'
import { Await, Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const [error, setError] = useState ()
    const navigate = useNavigate()

    const {register} = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError()
        if(password !== confPass){
            setError('Password does not match')
        } else {        
        await register(email, password).then((res) => {
            navigate('/')
        }).catch((err) => {
            setError(err.toString())
        })
    }
    }


return (    
    <MDBContainer className='d-flex align-items-center justify-content-center' >
        <MDBCard style={{width: '600px'}}>
            <MDBCardTitle className='mt-2 text-center'>
                <strong style={{
                    fontWeight: "400",
                    color: "#000",
                    marginBottom: "10px",
                }}>
                    Register
                </strong>
            </MDBCardTitle>
            {
                error && <MDBTypography className='ms-4 me-4' note noteColor='danger'>
                    <strong>Error: </strong>{error}
                </MDBTypography>
            }
            <MDBCardBody>
                <form onSubmit={handleSubmit}>
                <MDBInput 
                    value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                        type="email"
                        label='Enter your email'
                        size='lg'
                        required
                    />  

                <MDBInput 
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                        type="password"
                        label='Enter your password'
                        size='lg'
                        required
                        className='mt-3'
                />  

                <MDBInput 
                        value={confPass}
                        onChange = {(e) => setConfPass(e.target.value)}
                        type="password"
                        label='Enter your password'
                        size='lg'
                        required
                        className='mt-3'
                /> 
                <div className='d-flex align-items-center justify-content-end mt-2'>
                    <MDBBtn type='submit' outline rounded style={{fontWeight: 600}}>
                        Register
                    </MDBBtn>
                </div>              
                </form>
            </MDBCardBody>
            <MDBCardFooter>
            <div className='d-flex align-items-center justify-content-center'>
                <span className='me-1'>
                    Already joined?
                </span>
                <Link to ='/login'>
                    <span>
                        Login
                    </span>
                </Link>
            </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
)
}
