import React, { useState } from 'react'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

return (    
    <MDBContainer className='d-flex align-items-center justify-content-center' >
        <MDBCard style={{width: '600px'}}>
            <MDBCardTitle className='mt-2 text-center'>
                <strong style={{
                    fontWeight: "400",
                    color: "#000",
                    marginBottom: "10px",
                }}>
                    Login
                </strong>
            </MDBCardTitle>
            <MDBCardBody>
                <form>
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
                <div className='d-flex align-items-center justify-content-end mt-2'>
                    <Link className='me-2' to={'/forgot-password'}>
                    Forgot password?
                    </Link>
                    <MDBBtn type='submit' outline rounded style={{fontWeight: 600}}>
                        Login
                    </MDBBtn>
                </div>              
                </form>
            </MDBCardBody>
            <MDBCardFooter>
            <div className='d-flex align-items-center justify-content-center'>
                <span className='me-1'>
                    New here?
                </span>
                <Link to ='/register'>
                    <span>
                        Register
                    </span>
                </Link>
            </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
)
}
