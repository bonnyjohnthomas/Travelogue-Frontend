import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';






function Main() {

    const pathParams = useParams()
    console.log(pathParams.id);

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [password, setPass] = useState('')
    const [locations, setLocations] = useState([])
    const [image, setImage] = useState(null)
    const [profession, setProf] = useState('')
    const location = useNavigate()


    const logout=async(e)=>{
        localStorage.clear()
        alert('Logged Out successfully')
        location('/')
    }

    

    const fetchData = async () => {

       
        const result = await axios.get('http://localhost:8000/getTraveller/' + pathParams.id)
        console.log(result.data.user);

        setName(result.data.user.name)
        setAge(result.data.user.age)
        setCountry(result.data.user.country)
        setLocations(result.data.user.locations)
        setImage(result.data.user.image)
        setProf(result.data.user.profession)
        setId(result.data.user.id)
    }

    
    if(!localStorage.getItem('Token')){

        alert('Please Login to continue');
        location('/')
     
    }else{
        
        useEffect(() => {
            fetchData()
        }, [])
               
    }
     
    // console.log(image);

   

    



    return (

        <>
            <div className="container mt-5 mb-5">

                <h1 className='mb-5 ' style={{ marginLeft: '270px' }}>Welcome  {name} !

                 <i class="fa-solid fa-face-smile-beam"></i>
                   
                </h1>

                <div  style={{ marginLeft: '710px' }}>
                <Button onClick={e=>logout(e)} style={{ marginLeft: '210px' }} variant="success">Log Out <i className="fa-solid fa-right-from-bracket mx-2"></i></Button>
                </div>



                <div className="row">

                    <div className="col-6 "  >
                        <Card style={{ width: '18rem', marginLeft: '180px' }} >
                            {image==null?'':
                                <Card.Img className='p-3' variant="top" src={require(`./images/${image}`)} />}
                            <Card.Body>
                                <Card.Title className='text-center'> <b>{name}</b>  </Card.Title>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item > <b>Nationality:</b>  {country}</ListGroup.Item>
                                <ListGroup.Item> <b>Age :</b>   {age}</ListGroup.Item>
                                <ListGroup.Item><b>Profession :</b> {profession}</ListGroup.Item>
                            </ListGroup>

                        </Card>
                    </div>

                    <div className="col-6">

                        <Link to={'view'}>

                            <Button style={{ marginLeft: '50px', marginTop: '180px' }} variant="info" size="lg">
                                My Collection <i className="fa-solid fa-right-to-bracket mx-2"></i>
                            </Button>

                        </Link>



                    </div>

                </div>

               

            </div>
        </>

    )
}

export default Main