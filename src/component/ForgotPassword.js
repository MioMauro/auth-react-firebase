import React, { useState } from 'react'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography, } from 'mdb-react-ui-kit'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
    const [res, setRes] = useState()
    const [email, setEmail] = useState()
    const {ForgotPassword} = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setRes()
        await ForgotPassword(email).then((res) => {
            setRes('Check inbox for instruction')
        }).catch((err) => {
            setRes(err.message)
        })
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
            res && <MDBTypography className='ms-4 me-4' note noteColor='dark'>
                {res}
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

            <div className='d-flex align-items-center justify-content-end mt-2'>
                <MDBBtn type='submit' outline rounded style={{fontWeight: 600}}>
                    Reset
                </MDBBtn>
            </div>              
            </form>
        </MDBCardBody>
        <MDBCardFooter>
        <div className='d-flex align-items-center justify-content-center'>
            <span className='me-1'>
                Back to?
            </span>
            <Link to ='/'>
                <span>
                    Profile
                </span>
            </Link>
        </div>
        </MDBCardFooter>
    </MDBCard>
</MDBContainer>
)
}

export default ForgotPassword