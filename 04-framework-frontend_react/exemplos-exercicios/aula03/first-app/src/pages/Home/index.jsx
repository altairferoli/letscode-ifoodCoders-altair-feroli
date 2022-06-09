import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Ano</th>
                  <th>Cor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Volkswagen</td>
                  <td>Logus</td>
                  <td>2005</td>
                  <td>Prata</td>
                </tr>
                <tr>
                  <td>Ford</td>
                  <td>Fiesta</td>
                  <td>2014</td>
                  <td>Preto</td>
                </tr>
                <tr>
                  <td>Mitsubishi</td>
                  <td>Pajero TR4</td>
                  <td>2014</td>
                  <td>Branco</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/app">
              <Button>Formulário</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Home };
