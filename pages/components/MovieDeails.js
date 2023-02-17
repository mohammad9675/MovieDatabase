import { Container, Row, Col } from "react-bootstrap";

export default function MovieDetails({ movie }) {

  const { directors, fullplot, cast, awards, imdb } = movie;
  const casts = cast.length > 0 ? cast.join(", ") : "N/A";

  return (
    <>
      <Container>
        <Row>
          {movie?.poster && (
            <Col md>
              <img src={movie?.poster} alt="poster" className="w-100" />
              <br />
              <br />
            </Col>
          )}
          <Col md>
            <strong>Directed By:</strong> {directors.join(", ")}
            <br />
            <br />
            <p>{fullplot}</p>
            <strong>Cast:</strong> {casts}
            <br />
            <br />
            <strong>Awards:</strong> {awards.text}
            <br />
            <strong>IMDB Rating:</strong> {imdb.rating} ({imdb.votes} votes)
          </Col>
        </Row>
      </Container>
    </>
  );
}
