import "./Trending.css";
import { Card, Container, Col, Row } from "react-bootstrap";

const Trending = () => {
  return (
    <>
      <Container className="">
        <h1 className="trending-title mb-4">Trending Movie</h1>
        <Row xs={2} md={3} lg={4} xl={5} className="g-xl-5 gy-lg-3 g-sm-5 gy-5 ">
          {Array.from({ length: 15 }).map((_, idx) => (
            <Col className="d-flex justify-content-center">
              <Card className="card-style ">
                <Card.Body className="card-body-style">
                  <Card.Title>Title</Card.Title>
                  <Card.Text>Year</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Trending;
