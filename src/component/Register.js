import React, { useState } from 'react'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'


export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')

    
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
