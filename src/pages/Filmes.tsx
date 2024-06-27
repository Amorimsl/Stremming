import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionMovies from '../components/SectionMovies';
import GridMovies from '../components/GridMovies';
interface Collection {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: number[];
}
interface PropsGenre {
  id: number;
  name: string;
}
interface Props {
  movies: Collection[];
  genre: PropsGenre[];
}

const Filmes: React.FC<Props> = ({ movies, genre }) => {
  return (
    <>
      <Header />
      {/* Sections 1 */}
      <SectionMovies movies={movies} genre={genre} />
      {/* Sections 2 */}

      <GridMovies movies={movies} />

      <Footer />
    </>
  );
};

export default Filmes;
