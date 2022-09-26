import React from 'react'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
    const {user, logout} = useAuth()
return (
    <MDBContainer className='d-flex align-items-center justify-content-center' >
        <MDBCard style={{width: '600px'}}>
            <MDBCardTitle className='mt-2 text-center'>
                <strong style={{
                    fontWeight: "400",
                    color: "#000",
                    marginBottom: "10px",
                }}>
                    User Profile
                </strong>
            </MDBCardTitle>
            <MDBCardBody>
                <div style={{
                    flexDirection: 'column'
                }} className='d-flex align-items-center justify-content-center'>
                    <img className='rounded-circle shadow' width={150} src='https://mbbootstrap.com/img/new/avatar/1.jpg' alt='profile-img' />
                    <span className='h3 mt-2'>
                        {
                            String(user?.email).split('@')[0]
                        }
                    </span>
                    <MDBBtn onClick={() => logout()} className='mt-3' outline rounded>
                        Logout
                    </MDBBtn>
                </div>
            </MDBCardBody>
            <MDBCardFooter>
            <div className='d-flex align-items-center justify-content-center'>
                <span className='me-1'>
                    Update profile?
                </span>
                <Link to ='/update-profile'>
                    <span>
                        Update
                    </span>
                </Link>
            </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
)
}

export default Dashboard
