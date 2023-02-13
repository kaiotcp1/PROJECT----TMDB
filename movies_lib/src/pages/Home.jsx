import React from 'react'
import { useState, useEffect } from 'react'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
console.log(moviesURL);
console.log(apiKey);


const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();  // transformando em objeto javascript

    setTopMovies(data.results);
  };

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    
    getTopRatedMovies(topRatedUrl);

  }, []);

  return (
    <div>
      {topMovies && topMovies.map((movie) => (
        movie.title
      ))}
    </div>
  )
}

export default Home