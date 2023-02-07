import "./Trending.css";
import MovieModal from "../MovieModal/MovieModal";
import { Card, Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getMovieList, searchMovie } from "../../api";

const Trending = () => {
  // Fetching

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  // Modal
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setShow(true);
    setSelectedMovie(movie);
  };

  // console.log(selectedMovie);

  return (
    <>
      <Container>
        <h1 className="trending-title mb-4">Trending Movie</h1>
        <Row xs={2} md={3} lg={4} xl={5} className="g-xl-5 gy-lg-3 g-sm-5 gy-5 ">
          {popularMovies.map((movie) => {
            // Style
            const cardBg = {
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/w200/${movie.poster_path})`,
            };
            return (
              <Col className="d-flex justify-content-center" key={movie.id}>
                <Card className="card-style" onClick={() => handleShow(movie)}>
                  <Card.Body className="card-body-style" style={cardBg}>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.release_date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        {/* For Modal */}
        <MovieModal selectedMovie={selectedMovie} handleClose={handleClose} show={show} />
      </Container>
    </>
  );
};

export default Trending;
