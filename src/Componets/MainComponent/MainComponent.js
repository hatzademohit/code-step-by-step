import React from "react";
import { Col, Card } from "react-bootstrap";

export default function MainComponent(props) {
  return (
    <Col xl={props.xl} lg={props.lg} md={props.md} xs={props.xs}>
      <Card>
        <Card.Header>
          <Card.Title className="h6">{props.title}</Card.Title>
        </Card.Header>
        <Card.Body>{props.component}</Card.Body>
      </Card>
    </Col>
  );
}
