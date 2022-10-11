import React, { useState } from 'react'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBBadge,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBCardTitle
} from 'mdb-react-ui-kit';

const ProfilePage = (props) => {

    const [empName, setEmpName] = useState('');
    const [pernr, setPernr] = useState('');
    const [emp, setEmp] = useState('');

    console.log("Hello from Profile page Imp is :", props.emp);
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <a href='#'>Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <a href="#">User</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={process.env.PUBLIC_URL + "profilePic.png"}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p className="text-muted mb-1"> {props.emp.EMPNAME} </p>
                                <p className="text-muted mb-1">{props.emp.EMPPOS_TXT} </p>
                                <p className="text-muted mb-4"> {props.emp.EMPNO} </p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn>Edit Profile Picture</MDBBtn>
                                    {/* <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        {/* <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fas icon="globe fa-lg text-warning" />
                                        <MDBCardText>https://mdbootstrap.com</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                        <MDBCardText>mdbootstrap</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                        <MDBCardText>@mdbootstrap</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                        <MDBCardText>mdbootstrap</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                        <MDBCardText>mdbootstrap</MDBCardText>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard> */}
                    </MDBCol>


                    <MDBCol lg="8">
                        {/* first Section -- Basic Information */}
                        <MDBCard className="mb-4">
                            <MDBCardBody >
                                <MDBCardTitle>Personal Information</MDBCardTitle>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{props.emp.EMPNAME}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{props.emp.EMAIL}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />

                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Company</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{props.emp.COMPANY_TXT}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Department</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{props.emp.DEPT_TXT}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Position</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{props.emp.EMPPOS_TXT}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Mobile</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"></MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                            </MDBCardBody>
                        </MDBCard>

                        {/* Hierachy */}
                        <MDBRow>
                            <MDBCol>
                                <MDBCard className="mb-4">
                                    <MDBCardText className="mb-3 mt-3 m-4"><span className="text-primary font-italic me-1"> My Hierachy </span> </MDBCardText>
                                    <MDBTable align='middle'>
                                        <MDBTableHead>
                                            <tr>
                                                <th scope='col'>Name</th>
                                                <th scope='col'>Title</th>
                                                <th scope='col'>Status</th>
                                                <th scope='col'>Position</th>
                                                <th scope='col'>Actions</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                            alt=''
                                                            style={{ width: '45px', height: '45px' }}
                                                            className='rounded-circle'
                                                        />
                                                        <div className='ms-3'>
                                                            <p className='fw-bold mb-1'>John Doe</p>
                                                            <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Software engineer</p>
                                                    <p className='text-muted mb-0'>IT department</p>
                                                </td>
                                                <td>
                                                    <MDBBadge color='success' pill>
                                                        Active
                                                    </MDBBadge>
                                                </td>
                                                <td>Senior</td>
                                                <td>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Edit
                                                    </MDBBtn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                            alt=''
                                                            style={{ width: '45px', height: '45px' }}
                                                            className='rounded-circle'
                                                        />
                                                        <div className='ms-3'>
                                                            <p className='fw-bold mb-1'>Alex Ray</p>
                                                            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Consultant</p>
                                                    <p className='text-muted mb-0'>Finance</p>
                                                </td>
                                                <td>
                                                    <MDBBadge color='primary' pill>
                                                        Onboarding
                                                    </MDBBadge>
                                                </td>
                                                <td>Junior</td>
                                                <td>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Edit
                                                    </MDBBtn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                                            alt=''
                                                            style={{ width: '45px', height: '45px' }}
                                                            className='rounded-circle'
                                                        />
                                                        <div className='ms-3'>
                                                            <p className='fw-bold mb-1'>Kate Hunington</p>
                                                            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Designer</p>
                                                    <p className='text-muted mb-0'>UI/UX</p>
                                                </td>
                                                <td>
                                                    <MDBBadge color='warning' pill>
                                                        Awaiting
                                                    </MDBBadge>
                                                </td>
                                                <td>Senior</td>
                                                <td>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Edit
                                                    </MDBBtn>
                                                </td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>

                        {/* PRoject Assignment */}
                        <MDBRow>
                            {/* Assignment Project 1 */}
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-4">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            {/* Assignment Project 1 */}
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-4">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    Wisys
                </a>
            </div>
        </section>
    )
}

export default ProfilePage
