import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Actor{
  id:number;
  name: string;
  profile_path: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const SectionGrid = () => {
  const [actor1Movies, setActor1Movies] = useState([]);
  const [actor2Movies, setActor2Movies] = useState([]);
  const [actor3Movies, setActor3Movies] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/person/popular',
          {
            params: {
              api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
              language: 'pt-BR',
            },
          }
        );

        const fetchedActors = response.data.results.slice(0, 3);
        setActors(fetchedActors);

        if (fetchedActors.length > 0) {
          fetchMoviesForActor(fetchedActors[0].id, setActor1Movies);
          fetchMoviesForActor(fetchedActors[1].id, setActor2Movies);
          fetchMoviesForActor(fetchedActors[2].id, setActor3Movies);
        }
      } catch (error) {
        console.error('Erro ao buscar os atores:', error);
      }
    };

    const fetchMoviesForActor = async (actorId, setMovies) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${actorId}/movie_credits`,
          {
            params: {
              api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
              language: 'pt-BR',
            },
          }
        );
        setMovies(response.data.cast);
      } catch (error) {
        console.error(`Erro ao buscar filmes para o ator. ${actorId}:`, error);
      }
    };

    fetchActors();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
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
    <div className="bg-gray-900 p-20 text-white sm:p-4">
      <div className="grid grid-flow-col auto-cols-max w-360 ">
        <div className="sm:pl-2 md:pl-16 md:pr-2 lg:pr-5 lg:pl-20">
          <div className="mt-10 h-[400px]">
            <div className="mt-2 flex flex-col gap-4">
              {actors.length > 0 ? (
                actors.map((actor) => (
                  <div
                    key={actor.id}
                    className="bg-gray-900 rounded-[8px] border border-gray-900 md:w-2/3 h-[400px] relative top-0.5 mb-[25px]"
                  >
                    <p className="text-xm pb-2">{actor.name}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt={actor.name}
                      style = {{ width: 290, height: 350 }}
                      className="h-full w-full object-cover rounded-[8px]"
                    />
                  </div>
                ))
              ) : (
                <p>Carregando...</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="mt-10 h-[400px]">
            <p className="text-xm pl-2">Conhecido(a) por</p>
            <Slider {...settings} className="mt-2">
              {actor1Movies.length > 0 ? (
                actor1Movies.map((movie) =>
                  movie.poster_path ? (
                    <div
                      key={movie.id}
                      className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        style = {{ width: 240 }}
                        className="h-full w-full object-cover rounded-[8px]"
                      />
                    </div>
                  ) : null
                )
              ) : (
                <p>Carregando...</p>
              )}
            </Slider>
          </div>

          <div className="mt-10 h-[400px]">
            <p className="text-xm pl-2">Conhecido(a) por</p>
            <Slider {...settings} className="mt-2">
              {actor2Movies.length > 0 ? (
                actor2Movies.map((movie) =>
                  movie.poster_path ? (
                    <div
                      key={movie.id}
                      className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        style = {{ width: 240 }}
                        className="h-full w-full object-cover rounded-[8px]"
                      />
                    </div>
                  ) : null
                )
              ) : (
                <p>Carregando...</p>
              )}
            </Slider>
          </div>

          <div className="mt-10 h-[400px]">
            <p className="text-xm pl-2">Conhecido(a) por</p>
            <Slider {...settings} className="mt-2">
              {actor3Movies.length > 0 ? (
                actor3Movies.map((movie) =>
                  movie.poster_path ? (
                    <div
                      key={movie.id}
                      className="bg-gray-900 rounded-[8px] border-8 border-gray-900 h-[361px]"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        style = {{ width: 240 }}
                        className="h-full w-full object-cover rounded-[8px]"
                      />
                    </div>
                  ) : null
                )
              ) : (
                <p>Carregando...</p>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const Actors = () => {
  return (
    <>
      <SectionGrid />
    </>
  );
};

export default Actors;
