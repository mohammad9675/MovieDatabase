import PageHeader from "./components/PageHeader";
import MovieDetails from "./components/MovieDeails";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(
    `https://excited-deer-leg-warmers.cyclic.app/api/movies?page=${page}&perPage=10`
  );

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function next() {
    setPage(page + 1);
  }

  // console.log(pageData);

  if (!pageData || !pageData.length) return null;

  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date" />
      <Accordion>
        {pageData.map((movie) => (
          <Accordion.Item key={movie._id} eventKey={movie._id}>
            <Accordion.Header>
              <strong>{movie.title}</strong>
              {movie.year} - {movie.directors.join(", ")}
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
