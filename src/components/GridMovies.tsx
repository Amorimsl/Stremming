import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface Collection {
  id: number;
  title: string;
  poster_path: string;
}
interface Props {
  movies: Collection[];
}

const GridMovies: React.FC<Props> = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-custom-neutral p-20 text-white">
      <div className="mt-10">
        <p className="text-xl">Filmes em Alta</p>

        <Slider {...settings} className="mt-2">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-blue-500 h-80 rounded-[33px] border-8 border-custom-neutral"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="h-full w-full object-cover rounded-[30px]"
                />
                <p className="text-center mt-2">{movie.title}</p>
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default GridMovies;
