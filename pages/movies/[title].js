import { useRouter } from "next/router";
import useSWR from "swr";
import MovieDetails from "../components/MovieDeails";
import Error from "next/error";
import PageHeader from "../components/PageHeader";

export default function MainNav() {
  const router = useRouter();
  const { title } = router.query;
  const { data, error } = useSWR(
    `https://excited-deer-leg-warmers.cyclic.app/api/movies?page=1&perPage=10&title=${title}`
  );

  console.log(data);
  if (data == undefined || data == null) {
    return null;
  }
  if (!data.length) {
    // data = null
    // data = []
    return <Error statusCode={404} />;
  }
  return (
    <>
      {data.map((movie) => (
        <div key={movie._id}>
          <PageHeader text={title} />

          <MovieDetails movie={movie} />
        </div>
      ))}
    </>
  );
}
