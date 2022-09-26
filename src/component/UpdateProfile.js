import React, { useState } from 'react'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBBtn, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'


function UpdateProfile() {
    const {user} = useAuth()
    const [fillActive, setFillActive] = useState('tab1')

    const handleFillClick = (value) => {
        if(value === fillActive) {
            return
        } else {
            setFillActive(value)
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
                Update Profile
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
            </div>
                <MDBTabs fill className='mb-3'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                            Update Email
                        </MDBTabsLink>
                        <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                            Update Password
                        </MDBTabsLink>
                    </MDBTabsItem>
                    </MDBTabsItem>
                </MDBTabs>
        </MDBCardBody>
        <MDBCardFooter>
        <div className='d-flex align-items-center justify-content-center'>
            <span className='me-1'>
                Back to
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

export default UpdateProfile