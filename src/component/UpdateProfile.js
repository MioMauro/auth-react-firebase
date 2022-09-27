import React, { useState } from 'react'
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBBtn, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBInput, MDBInputGroup, MDBTypography } from 'mdb-react-ui-kit'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { async } from '@firebase/util'
//import { async } from '@firebase/util'


function UpdateProfile() {
    const {user, updateUserEmail, updateUserPassword} = useAuth()
    const [fillActive, setFillActive] = useState('tab1')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [res, setRes] = useState()

    const handleFillClick = (value) => {
        setRes()
        if(value === fillActive) {
            return
        } else {
            setFillActive(value)
        }
    }

    const handleEmailSubmit = async(e) => {
        e.preventDefault()
        setRes()
        await updateUserEmail(email).then((res) => {
            setRes('Email update successfully')
        }).catch((err) => {
            setRes(err.message)
        })
    }

    const handlePasswordSubmit = async(e) => {
        e.preventDefault()
        setRes()
        await updateUserPassword(password).then((re) =>{
            setRes('Password updated')
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
                Update Profile
            </strong>
        </MDBCardTitle>
        {
            res && <MDBTypography className='ms-4 me-4' note noteColor='dark'>
                {res}
            </MDBTypography>
        }
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

                <MDBTabsContent>
                    <MDBTabsPane show={fillActive === 'tab1'}>
                        <form onSubmit={handleEmailSubmit}>
                            <MDBInputGroup>
                                <input 
                                    value={email}
                                    onChange={(e) => setEmail
                                    (e.target.value)}
                                    className='form-control'
                                    placeholder='Enter new Email'
                                />
                                <MDBBtn type='submit' outline>
                                    Update
                                </MDBBtn>
                            </MDBInputGroup>
                        </form>
                    </MDBTabsPane>
                    <MDBTabsPane show={fillActive === 'tab2'}>
                    <form onSubmit={handlePasswordSubmit}>
                            <MDBInputGroup>
                                <input 
                                    value={password}
                                    onChange={(e) => setPassword
                                    (e.target.value)}
                                    className='form-control'
                                    type='password'
                                    placeholder='Enter new password'
                                />
                                <MDBBtn type='submit' outline>
                                    Update
                                </MDBBtn>
                            </MDBInputGroup>
                        </form>
                    </MDBTabsPane>                    
                </MDBTabsContent>
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