import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionSeries from '../components/SectionSeries';
import GridSeries from '../components/GridSeries';
interface PopularSeriesType {
  id: number;
  name: string;
  poster_path: string;
}
interface Props {
  popularSeries: PopularSeriesType[];
}

const Series: React.FC<Props> = ({ popularSeries }) => {
  return (
    <>
      <Header />
      {/* section-1*/}
      <SectionSeries />
      {/* section-2*/}
      <GridSeries popularSeries={popularSeries} />
      <Footer />
    </>
  );
};

export default Series;
