import "./Trending.css";
import { Card, Container, Col, Row } from "react-bootstrap";

const Trending = () => {
  return (
    <>
      <Container className="">
        <h1 className="trending-title mb-4">Trending Movie</h1>
        <Row className="g-4 d-flex justify-content-center">
          <Col>
            <Card className="card-style">
              <Card.Body className=" card-trending-1">
                <Card.Title>Avatar: The Way of Water</Card.Title>
                <Card.Text>(2022)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-style">
              <Card.Body className=" card-trending-2">
                <Card.Title>Bullet Train</Card.Title>
                <Card.Text>(2022)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-style">
              <Card.Body className=" card-trending-3">
                <Card.Title>Top Gun: Maverick</Card.Title>
                <Card.Text>(2022)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-style">
              <Card.Body className=" card-trending-4">
                <Card.Title>Everything Everywhere All at Once</Card.Title>
                <Card.Text>(2022)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-style">
              <Card.Body className=" card-trending-5">
                <Card.Title>Strange World</Card.Title>
                <Card.Text>(2022)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-style">
              <Card.Body className=" card-trending-6">
                <Card.Title>Violent Night</Card.Title>
                <Card.Text>(2022)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-style">
              <Card.Body className=" card-trending-7">
                <Card.Title>Black Adam</Card.Title>
                <Card.Text>(2022)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-style">
              <Card.Body className=" card-trending-8">
                <Card.Title>Black Panther: Wakanda Forever</Card.Title>
                <Card.Text>(2022)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trending;
