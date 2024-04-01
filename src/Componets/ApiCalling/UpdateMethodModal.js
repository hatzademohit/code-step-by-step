import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UpdateMethodModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  // const [updatedata, setUpdatedata] = useState(null)

  function updateUser(e){
    handleShow()
    fetch(`http://localhost/react_crud/putdata.php?Id=${e}`).then((result) => {
      result.json().then((resp) =>{
        console.log(resp)
        // console.log(resp.email)
        // setFirstname([1].firstname)
        // setLastname([1].lastname)
        // setEmail([1].email)
        // setMobile([1].mobile)
      })
    })
    /*const updateData = {firstname, lastname, email, mobile}
    setUpdatedata(updateData);
    console.log(updateData);*/
  }

  function saveData(){
    handleClose()
    // console.log(updatedata);
  }
  return (
    <>
      <Button size='sm' className='me-2' variant="primary" onClick={(e)=> updateUser(props.Id)}>
        Edit
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Lastname" value={lastname} onChange={((e) => setLastname(e.target.value))} />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" value={email} onChange={((e) => setEmail(e.target.value))} />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="number" placeholder="Enter Number" value={mobile} onChange={((e) => setMobile(e.target.value))} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button size='sm' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button size='sm' variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
