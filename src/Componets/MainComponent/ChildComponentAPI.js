import React from 'react'
import { Container, Row } from 'react-bootstrap';
import MainComponent from '../MainComponent/MainComponent';
import GetAIP from '../ApiCalling/GetAPI';
import DeleteData from '../ApiCalling/Deleteata';

export default function ChildComponentAPI() {
  return (
    <Container fluid>
      <Row style={{ gap: '10px 0' }}>
        <MainComponent xl="12" lg="12" md="12" xs="12" title='Add / Delete and Edit data from API ' component={<DeleteData />} />
        <MainComponent xl="12" lg="12" md="12" xs="12" title="Get API" component={<GetAIP />} />
      </Row>
    </Container>
  )
} 
