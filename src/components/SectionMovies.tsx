import Title from './UI/Title';
import Info from './UI/Info';
import Genre from './UI/Genre';
import Description from './UI/Description';
import WatchButton from './UI/WatchButton';
import InfoButton from './UI/InfoButton';
import ListButton from './UI/ListButton';
import FavoriteButton from './UI/FavoriteButton';
import FilterGenre from './UI/FilterGenre';
import TitleSection from './UI/TitleSection';
interface PropsMovies {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  genre_ids: number[];
}
interface Genres {
  id: number;
  name: string;
}
interface props {
  movies: PropsMovies[];
  genre: Genres[];
}

const SectionMovies: React.FC<props> = ({ movies, genre }) => {
  return (
    <div className="flex flex-col justify-end font-sans py-40 w-screen bg-gradient-to-tr from-blue-gradient md:justify-center  ">
      <div className="flex flex-row gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20  ">
        <TitleSection name="Filmes" />
        <FilterGenre />
      </div>

      {movies.map((movie, i) => (
        <div
          className={`flex flex-col gap-2.5 mb-8 mx-4 md:mt-9 md:mx-20 ${
            i === 0 ? '' : 'hidden'
          }`}
          key={movie.id}
        >
          <Title movies={movie.title} />
          <Info releaseDate={movie.release_date} />

          <Genre genreIds={movie.genre_ids} genres={genre} />
          <Description overviews={movie.overview} />
        </div>
      ))}

      <div className="flex flex-col gap-6 mx-4 mb-6 md:flex-row md:mx-20">
        <WatchButton />
        <InfoButton />
        <div className="flex gap-6">
          <ListButton />
          <FavoriteButton />
        </div>
      </div>
    </div>
  );
};

export default SectionMovies;
