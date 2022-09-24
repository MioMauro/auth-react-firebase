import React from 'react'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInput, MDBBtn, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

const Dashboard = () => {
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
                <div>
                    <img />
                    <span>

                    </span>
                    <MDBBtn>
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
