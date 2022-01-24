import React, {useState} from 'react';
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import {useAuth} from '../../components/context/AuthContext';
import { Card, Button, Alert } from 'react-bootstrap';
import'./home.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Home = () =>{

  const history = useNavigate()
  const {currentUser ,logout} = useAuth()
  const [error, setError] =useState("")
async function handleLogout(){
    setError('')

    try{
      await logout()
      history('/login')
    }catch{
      setError('Error logging out!')
    }
}
  return (
    <>

   {/*} <Card>
      <Card.Body>
        <h2 className="text-center mb-4"></h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong>{currentUser.email}
      </Card.Body>
  </Card>*/}
    <div className="w-100 text-center mb-2">
      <Button variant="link" onClick={handleLogout}>Log Out</Button>
  </div>
   <div className='images'>
   <a target="_blank" href={process.env.PUBLIC_URL + "normalH.html"} > <img src={image1} /> </a>
   <a target="_blank" href={process.env.PUBLIC_URL + "kitchen.html"} > <img src={image2} /> </a>
   <a target="_blank" href={process.env.PUBLIC_URL + "bedroom.html"} > <img src={image3} /> </a>
   <a target="_blank" href={process.env.PUBLIC_URL + "LivingRoom.html"} > <img src={image4} /> </a>
   <a target="_blank" href={process.env.PUBLIC_URL + "Childroom.html"} > <img src={image5} /> </a>
  </div>
   </>
   
  );
}

export default Home;
