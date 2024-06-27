import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Collection {
  id: number;
  title: string;
  poster_path: string;
}
interface Props {
  halloWeenCollections: Collection[];
}

const GridHalloween: React.FC<Props> = ({ halloWeenCollections }) => {
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
      <p className="text-xl">Coleções de Halloween</p>

      <Slider {...settings} className="mt-10">
        {halloWeenCollections.length > 0 ? (
          halloWeenCollections.map((item) => (
            <div
              key={item.id}
              className="bg-blue-500 h-80 rounded-[30px] border-8 border-custom-neutral"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="h-full w-full object-cover rounded-[15px]"
              />
              <p className="text-center mt-2">{item.title}</p>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </Slider>
    </div>
  );
};

export default GridHalloween;
