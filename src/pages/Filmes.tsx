import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionMovies from '../components/SectionMovies';
import GridMovies from '../components/GridMovies';
interface Collection {
  id: number;
  title: string;
  poster_path: string;
}
interface Props {
  movies: Collection[];
}

const Filmes: React.FC<Props> = ({ movies }) => {
  return (
    <>
      <Header />
      {/* Sections 1 */}
      <SectionMovies />
      {/* Sections 2 */}

      <GridMovies movies={movies} />

      <Footer />
    </>
  );
};

export default Filmes;
