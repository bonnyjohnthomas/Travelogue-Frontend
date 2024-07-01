import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function View() {

  const pathParams = useParams()
  console.log(pathParams.id);

  const [id, setId] = useState('')
  const [locations, setLocations] = useState([])
  const[url,setUrl]=useState('')


  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/getTraveller/' + pathParams.id)
    console.log(result.data.user);

    setId(pathParams.id)
    setLocations(result.data.user.locations)
    // setUrl(result.data.user.locations[0].url)

  }

  console.log(locations);
  // console.log(url);

  useEffect(() => {
    fetchData()
  }, [])

  const del = (e,url) =>{

    const body={
      id,url
    }

    const result= axios.delete(`http://localhost:8000/getTraveller/${id}/view/delete`,body)
    console.log(result);

  }






  return (
    <>

      <div className="container ">

        <Link to={`/main/${id}/view/add`}>

          <Button style={{ marginLeft: '950px' }} className='mt-5' variant="info">Add New <i className="fa-solid fa-circle-plus mx-2"></i></Button>


        </Link>



        <div className="row mt-5" style={{ display: 'flex', justifyContent: 'space-evenly' }}>


          {

            
            locations.map((item) => (

              

              <Card style={{ width: '18rem' }} className='mt-5'>
                <Card.Img className='p-3' style={{height:'300px'}} variant="top" src={require(`./images/${item.url}`)} />
                <Card.Body>
                  <Card.Title> <b>{item.place}</b> </Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item><p > <b className='mx-2'>Country :</b>  {item.country}</p>  </ListGroup.Item>
                  <ListGroup.Item> <p > <b className='mx-2'>Opened :</b>  {item.opened}</p> </ListGroup.Item>
                  {/* <ListGroup.Item> <b></b> </ListGroup.Item> */}
                </ListGroup>
                 
                

                <Button onClick={(e)=>del(e,url)}><i className="fa-solid fa-trash " style={{ marginRight: '20px', color: 'pink' }}></i>
                </Button>
                 
                
              </Card>
            ))

          }


        </div>

        <Link to={`/main/${id}`}>

          <Button style={{ marginLeft: '850px', marginTop: '100px' }} variant="info" size="lg">
            Back to Profile <i className="fa-solid fa-left-long mx-2"></i>
          </Button>

        </Link>


      </div>


    </>
  )
}

export default View