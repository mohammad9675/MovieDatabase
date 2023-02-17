import Link from "next/link";
import { Card } from "react-bootstrap";
import MovieDetails from "./components/MovieDeails";
import PageHeader from "./components/PageHeader";

// 573a139af29313caabcf0859
// Cyclic Link: https://excited-deer-leg-warmers.cyclic.app/

export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://excited-deer-leg-warmers.cyclic.app/api/movies/573a139af29313caabcf0859"
    )
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { movie: data } });
      });
  });
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer Mohammadhassan Khalilian" />
      <Card className="bg-light">
        <Card.Body>
          <p>
            I am a software developer with experience who is developing a
            website using Next.js Now! I have two main hobbies one is playing
            video games and the other one is watching movies and tv shows. my
            favorite movie is Dark City, if you like you can check it out in
            this link
            <Link href="/movies/Dark City" passHref legacyBehavior>
              <a>Dark City</a>
            </Link>
            and let me know if you like it!
          </p>
        </Card.Body>
        <MovieDetails movie={props.movie} />
      </Card>
    </>
  );
}
