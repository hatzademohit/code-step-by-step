import React from "react";
import { Col, Card } from "react-bootstrap";

export default function MainComponent(props) {
  return (
    <Col xl={3} lg={4} md={6} xs={12}>
      <Card>
        <Card.Header>
          <Card.Title className="h6">{props.title}</Card.Title>
        </Card.Header>
        <Card.Body>{props.component}</Card.Body>
      </Card>
    </Col>
  );
}
