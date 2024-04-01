import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PostMethodModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")

  function saveUser() {
    const data = { firstname, lastname, email, mobile }
    fetch("http://localhost/react_crud/adddata.php", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        props.ReloadTable()
      })
    })
    setShow(false)
  }

  return (
    <>
      <Button size='sm' variant="primary" className='position_abs' onClick={handleShow}>
        Add
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Modal</Modal.Title>
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
          <Button size='sm' variant="primary" onClick={saveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostMethodModal;