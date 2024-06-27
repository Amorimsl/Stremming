import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Filmes from './pages/Filmes';
import Actors from './pages/Actors';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [halloWeenCollections, setHalloweenCollections] = useState([]);

  useEffect(() => {
    const fetchPopularSeries = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/tv/popular',
          {
            params: {
              api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
              language: 'pt-BR',
            },
          }
        );
        setPopularSeries(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar as séries populares:', error);
      }
    };
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
              language: 'pt-BR',
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
      }
    };
    const fetchHalloweenCollections = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/list/1',
          {
            params: {
              api_key: '276c8dd1a63ee21cfe68c83fd88f5107',
              language: 'pt-BR',
            },
          }
        );
        setHalloweenCollections(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar as coleções de Halloween:', error);
      }
    };
    fetchHalloweenCollections();
    fetchMovies();
    fetchPopularSeries();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Home
                popularSeries={popularSeries}
                movies={movies}
                halloWeenCollections={halloWeenCollections}
              />
            }
          />
          <Route
            path="/series"
            element={<Series popularSeries={popularSeries} />}
          />
          <Route path="/filmes" element={<Filmes movies={movies} />} />
          <Route path="/actors" element={<Actors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
