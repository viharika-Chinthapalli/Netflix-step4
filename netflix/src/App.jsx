import React from 'react';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import requests from "./request";
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Row from './components/Row/Row';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  )
}

export default App;
