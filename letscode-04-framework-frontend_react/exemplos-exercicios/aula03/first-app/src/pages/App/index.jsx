import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Form>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Control placeholder="Insira a marca"/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Ano</Form.Label>
              <Form.Control type="number" placeholder="Escolha o ano"/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Cor</Form.Label>
              <Form.Control placeholder="Insira a cor"/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Modelo</Form.Label>
              <Form.Control placeholder="Insira o modelo"/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/">
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default App;
