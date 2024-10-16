import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Section from './pages/Section';
import Login from './pages/Login';
import VerifySession from './pages/VerifySession';
import Loading from './components/UI/Loading';
import Favorites from './pages/Favorites';
import InfoTemporada from './components/UI/InfoTemporada';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verifySession" element={<Loading />} />
          <Route
            path="/home"
            element={
              <VerifySession
                component={Section}
                componentProps={{ name: 'Home' }}
              />
            }
          />
          <Route
            path="/series"
            element={
              <VerifySession
                component={Section}
                componentProps={{ name: 'Séries' }}
              />
            }
          />
          <Route
            path="/actors"
            element={
              <VerifySession
                component={Section}
                componentProps={{ name: 'Actors' }}
              />
            }
          />

          <Route
            path="/series"
            element={
              <VerifySession
                component={Section}
                componentProps={{ name: 'Séries' }}
              />
            }
          />
          <Route
            path="/Movies"
            element={
              <VerifySession
                component={Section}
                componentProps={{ name: 'Filmes' }}
              />
            }
          />
          <Route
            path="/infoSeries"
            element={
              <VerifySession
                component={Section}
                componentProps={{ name: 'InfoSeries' }}
              />
            }
          />
          <Route
            path="/infoMovies"
            element={
              <VerifySession
                component={Section}
                componentProps={{ name: 'infoMovies' }}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <VerifySession
                component={Favorites}
                componentProps={{ section: <Favorites /> }}
              />
            }
          />
          <Route
            path="/infoSeason/:id"
            element={
              <VerifySession
                component={InfoTemporada}
                componentProps={{ section: <InfoTemporada /> }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
