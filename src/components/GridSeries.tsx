import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
interface Collection {
  id: number;
  name: string;
  poster_path: string;
}
interface Props {
  popularSeries: Collection[];
}

const GridSeries: React.FC<Props> = ({ popularSeries }) => {
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
        <p className="text-xl">Séries em Alta</p>

        <Slider {...settings} className="mt-1">
          {popularSeries.length > 0 ? (
            popularSeries.map((series) => (
              <div
                key={series.id}
                className="bg-blue-500 h-80 rounded-[30px] border-8 border-custom-neutral"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.name}
                  className="h-full w-full object-cover rounded-[15px]"
                />
                <p className="text-center mt-2">{series.name}</p>
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

export default GridSeries;
