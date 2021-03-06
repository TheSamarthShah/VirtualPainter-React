import React, {useRef, useState} from 'react';
import {Form, Card, Button, Alert} from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()
    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history("/")

        }catch{
            setError('Failed to Login')
        }
        setLoading(false)
    }

  return(
   <div className="main">
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                
                {error && <Alert varient="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                   
                    <Button className='w-100' type="submit" disabled={loading}>Log In</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
  </div>
  )
}
