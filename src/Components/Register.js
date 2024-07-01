import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function Register() {

  const location=useNavigate()

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPass] = useState('')
  // const[image,setImage]=useState('')
  const[profession,setProf]=useState('')
  const[file,setFile]=useState()

  const register = async (e) => {

    const formdata=new FormData()
    formdata.append('file',file)
    formdata.append('id',id)
    formdata.append('name',name)
    formdata.append('age',age)
    formdata.append('country',country)
    formdata.append('password',password)
    formdata.append('profession',profession)
   

    console.log(formdata);


    console.log(id);
    console.log(name);
    console.log(age);
    console.log(country);
    console.log(password);
    console.log(profession);
    console.log(file);

    // const body={id,name,age,country,password,image,profession}
    // console.log(body);

    const result = await axios.post('http://localhost:8000/register',formdata)
     console.log(result);
     alert(result.data.message)
    //  location('/')
  }

 



  return (
    <>

      <div className="container">
        <div className="row " style={{ marginTop: '50px' }}>
          <div className="col-4"></div>

          <div className="col-4 " >

            <Form >

              <Form.Group className="mb-3" controlId="formGroupId">
                <Form.Label>ID</Form.Label>
                <Form.Control onChange={(e) => setId(e.target.value)} type="text" placeholder="Enter an Id" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupImage">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control onChange={(e) => setFile(e.target.files[0])} type="file" placeholder="Enter url" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupCountry">
                <Form.Label>Enter Your Country</Form.Label>
                <Form.Control onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupAge">
                <Form.Label>Enter Your Age</Form.Label>
                <Form.Control onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter your age" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupProfession">
                <Form.Label>Enter Your Profession</Form.Label>
                <Form.Control onChange={(e) => setProf(e.target.value)} type="text" placeholder="Enter your profession" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" />
              </Form.Group>

              <Link to={'/'}>
                <Button onClick={(e) => register(e)} style={{ marginLeft: '120px' }} >Register</Button>
              </Link>
                      
                       <br /> <br />

              Already have an account?<Link to={'/'} className='mx-4'>Login here</Link>

            </Form>

          </div>

          <div className="col-4"></div>
        </div>
      </div>


    </>
  )
}

export default Register