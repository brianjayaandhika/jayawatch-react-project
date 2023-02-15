import "./Movie.css";
import MovieModal from "../MovieModal/MovieModal";
import { Card, Container, Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getMovieList } from "../../api";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [isQuery, setIsQuery] = useState(Boolean(searchParams.get("title")));
  const [searchKey, setSearchKey] = useState(searchParams.get("title") || "");

  // Fetch Popular Movie
  const getPopularMovie = () => {
    getMovieList().then((result) => {
      setMovies(result);
    });
  };

  // Fetch movie by search
  const searchMovie = (q) => {
    setSearchKey(q);
    setSearchParams(`title=${q}`);

    if (q) {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&include_adult=false&query=${q}`,
      }).then(function (response) {
        setMovies(response.data.results);
        setIsQuery(true);
      });
    } else {
      getPopularMovie();
      setIsQuery(false);
    }
  };

  useEffect(() => {
    if (isQuery) {
      searchMovie(searchKey);
    } else {
      getPopularMovie();
    }
    // eslint-disable-next-line
  }, [isQuery, searchKey]);

  // Modal
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setShow(true);
    setSelectedMovie(movie);
  };

  return (
    <>
      <Container>
        {isQuery ? <h1 className="movie-page-title mb-4">Search results for "{searchKey}" </h1> : null}

        <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
          <Form.Control className="form-search" type="text" placeholder="Search A Movie!" onChange={({ target }) => searchMovie(target.value)} />
        </Form.Group>

        <Row xs={2} sm={3} md={3} lg={4} xl={4} xxl={5} className="movie-group g-xl-4 gy-lg-1 gx-sm-1 gy-sm-4 gy-md-2 gx-md-5 g-2  ">
          {movies.length ? (
            movies.map((movie) => {
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
                      <Card.Title className="card-title">{movie.title}</Card.Title>
                      <Card.Text className="card-date">{movie.release_date}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <div className="not-found-section">
              <h1 className="text-not-found">Movie Not Found</h1>
            </div>
          )}
        </Row>
        {/* For Modal */}
        <MovieModal selectedMovie={selectedMovie} handleClose={handleClose} show={show} />
      </Container>
    </>
  );
};

export default Movie;
