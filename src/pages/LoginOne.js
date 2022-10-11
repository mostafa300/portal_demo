import React, { useState } from 'react'
import ProfilePage from './ProfilePage';
import axios from "axios";
import { Link, Routes, Route , useHistory } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
const LoginOne = (props) => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [empName, setEmpName] = useState('tata');
  const [pernr, setPernr] = useState('20160433');
  const [emp, setEmp] = useState('');

  //const navigate = useNavigate();
  const history = useHistory();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  // Login Function
  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      I_PERNR : enteredEmail,
      // Pasword: enteredPassword
    };

    const bodyRequest1 = {
      ZNEC_EMPL_PROFILE: obj
    };
    const body = JSON.stringify(bodyRequest1);
    const headers = {
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'Basic UzAwMjM4MjE5OTk6V2VsY29tZUAxMjM0NQ==',
      // 'x-csrf-token': 'Fetch',
      'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };

    console.log(body);
    // axios
    axios.post('https://e650123-iflmap.hcisbt.sa1.hana.ondemand.com/http/EmpProfile', body , { headers })
      .then(response => {
        console.log(response.data.R_EMP_DATA);
        setEmp(response.data.R_EMP_DATA);
        props.onLogin(response.data.R_EMP_DATA);
        history.push('/profilepage');
      })
      .catch(error => {
        // this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });

    //navigate('/profile');

  };

  return (
    <MDBContainer className="my-5" >

      <MDBCard className='col-6'>
        <form onSubmit={submitHandler}>
          <MDBRow className='g-0'>

            {/* <MDBCol md='6'>
              <MDBCardImage src={process.env.PUBLIC_URL + "wisys.png"} alt="login form" className='rounded-start w-100' />
            </MDBCol> */}

            <MDBCol >
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                  {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} /> */}
                  <span className="h1 fw-bold mb-0">Wisys</span>
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='text' size="lg" onChange={emailChangeHandler} />
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={passwordChangeHandler} />

                <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>

                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </form>
      </MDBCard>

    </MDBContainer>
  )
}

export default LoginOne
