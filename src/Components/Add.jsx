import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';





function Add() {

    const pathParams = useParams()
    console.log(pathParams.id);

    const [id, setId] = useState('')
    const [file, setFile] = useState()
    const [place, setPlace] = useState('')
    const [description, setDescr] = useState('')
    const [country, setCountry] = useState('')
    const [opened, setOpened] = useState('')





    const fetchData = async () => {
        setId(pathParams.id)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const add = async (e) => {

        const formdata = new FormData()
        formdata.append('file', file)
        formdata.append('id', id)
        formdata.append('place', place)
        formdata.append('country', country)
        formdata.append('opened', opened)
        formdata.append('description', description)

        console.log(id);
        console.log(file);
        console.log(place);
        console.log(description);
        console.log(country);
        console.log(opened);


        // const body={id,url,place,description,country,opened}
        // console.log(body);

        const result = await axios.post(`http://localhost:8000/getTraveller/${id}/add`, formdata)
        console.log(result);
        alert(result.data.message)



    }


    return (

        <>

            <div className="container">
                <div className="row " style={{ marginTop: '50px' }}>
                    <div className="col-4"></div>

                    <div className="col-4 " >

                        <Form >

                            <Form.Group className="mb-3" controlId="formGroupImage">
                                <Form.Label>Upload Image</Form.Label>
                                <Form.Control onChange={(e) => setFile(e.target.files[0])} type="file" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupPlace">
                                <Form.Label>Enter Place Name</Form.Label>
                                <Form.Control onChange={(e) => setPlace(e.target.value)} type="text" placeholder="Place Name" />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formGroupDescription">
                                <Form.Label>Enter some Description</Form.Label>
                                <Form.Control onChange={(e) => setDescr(e.target.value)} type="text" placeholder="Describe here" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupCountry">
                                <Form.Label>Enter Country Name</Form.Label>
                                <Form.Control onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupDate">
                                <Form.Label>Date of Opening</Form.Label>
                                <Form.Control onChange={(e) => setOpened(e.target.value)} type="text" placeholder="Opened Date" />
                            </Form.Group>

                            <Link to={`/main/${id}/view`}>
                                <Button onClick={(e) => add(e)} style={{ marginLeft: '145px' }} >Add</Button>
                            </Link>

                            <br /> <br />



                        </Form>

                        

                    </div>
                    <Link to={`/main/${id}/view`}>

                            <Button style={{ marginLeft: '850px', marginTop: '50px' }} variant="info" size="lg">
                                Go Back <i className="fa-solid fa-left-long mx-2"></i>
                            </Button>

                        </Link>

                    <div className="col-4"></div>
                </div>
            </div>


        </>
    )
}

export default Add