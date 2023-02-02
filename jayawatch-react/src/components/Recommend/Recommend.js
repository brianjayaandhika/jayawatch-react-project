import "./Recommend.css";
import { Card, Container } from "react-bootstrap";

const Recommend = () => {
  return (
    <>
      <Container>
        <h1 className="recommend-title mb-5">Recommended Movie</h1>
        <Card className="card-style">
          <Card.ImgOverlay className="card-style1">
            <Card.Title>Gambits Queen</Card.Title>
            <Card.Text>(2020)</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
};

export default Recommend;
