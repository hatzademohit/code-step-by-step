import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState()
    const [pass, setPass] = useState()
    const [ttext, setTtext] = useState('password')
    const navigate = useNavigate()

    function checkCredi(){
        if (name === 'mohit' && pass === '123456') {
            console.log('success');
            navigate('/allpages')
        }else{
            alert('Check you credential and try again')
        }
    }
    function ChangeFlied(){
        setTtext(ttext === "password" ? 'text' : "password")
    }

    return (
        <Container>
            <Form className='w-50 mx-auto mt-3 border p-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" value={name} onChange={(e)=> setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={ttext} placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                    <Button className='btn btn-sm btn-info' onClick={ChangeFlied}>Eye</Button>
                </Form.Group>
                <Button className='btn btn-sm' variant="primary" type="button" onClick={checkCredi}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Login;