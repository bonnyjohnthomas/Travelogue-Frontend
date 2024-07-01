import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link,  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';




function Login() {
    

     const location=useNavigate();

    const [id,setId]=useState('')
    const [password,setPass]=useState('')


    const login=async(e)=>{

    
        const body={id,password}

        console.log(body);

        try {

        const result =await axios.post('http://localhost:8000/login',body)
        console.log(result);
        localStorage.setItem("User",result.data.currentUser);
        localStorage.setItem("Token",result.data.token);
        location(`/main/${id}`)
        alert(result.data.message)
            
        } catch (error) {

            alert('Incorrect Login Data')
            location('/')
            
        }
    
               
       }



    return (
        < >

            <div className="container">
                <div className="row " style={{ marginTop: '140px' }}>
                    <div className="col-4"></div>

                    <div className="col-4 p-4" >

                        <Form >
                            <Form.Group className="mb-3" controlId="formGroupId">
                                <Form.Label>ID</Form.Label>
                                <Form.Control onChange={(e)=>setId(e.target.value)} type="text" placeholder="Enter your Id" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>

                            {/* <Link to={`main/${id}`}> */}
                               <Button onClick={(e)=>login(e)} style={{ marginLeft: '120px' }}  >Login</Button>
                            {/* </Link> */}

                             <br /> <br />

                            Don't have an account?<Link to={'/register'} className='mx-4'>Register here</Link>

                        </Form>

                    </div>

                    <div className="col-4"></div>
                </div>
            </div>





        </>
    )



}

export default Login