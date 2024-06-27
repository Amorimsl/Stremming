import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionHome from '../components/SectionHome';
import GridHalloween from '../components/GridHalloween';
import GridMovies from '../components/GridMovies';
import GridSeries from '../components/GridSeries';
interface Collection {
  id: number;
  title: string;
  poster_path: string;
}
interface PopularSeriesType {
  id: number;
  name: string;
  poster_path: string;
}

interface Props {
  halloWeenCollections: Collection[];
  popularSeries: PopularSeriesType[];
  movies: Collection[];
}

const Home: React.FC<Props> = ({
  halloWeenCollections,
  popularSeries,
  movies,
}) => {
  return (
    <>
      <Header />
      {/* Sections 1 */}
      <SectionHome />
      {/* Sections 2 */}
      <GridHalloween halloWeenCollections={halloWeenCollections} />
      <GridSeries popularSeries={popularSeries} />
      <GridMovies movies={movies} />

      <Footer />
    </>
  );
};

export default Home;
