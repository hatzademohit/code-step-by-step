import React from "react";
import { Col, Card } from "react-bootstrap";

export default function MainComponent(props) {
  return (
    <Col xl={props.xl} lg={props.lg} md={props.md} xs={props.xs}>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Title className="h6 m-0">{props.title}</Card.Title>
          <div className="ml-auto">{props.button}</div>
        </Card.Header>
        <Card.Body>{props.component}</Card.Body>
      </Card>
    </Col>
  );
}
