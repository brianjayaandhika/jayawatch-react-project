import { Container, Form } from "react-bootstrap";
import "./Intro.css";

const Intro = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    window.location.assign(`/movie?title=${e.target[0].value}`);
  };

  return (
    <>
      <Container className="intro-container mt-5 ">
        <h1 className="intro-title mb-2 text-center">
          Welcome To
          <br />
          <span className="intro-brand">Jayawatch</span>
        </h1>
        <p className="intro-text">Biggest free movie platform with more than 25.000+ movies!</p>
        <Form className="mt-3" style={{ width: "80%" }} onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control className="form-search" type="text" placeholder="Search A Movie!" />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Intro;
