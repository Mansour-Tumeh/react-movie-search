import React ,{useState,useEffect} from "react";
import "./App.css";
import Search from "./Components/search";
import MovieCard from "./Components/MovieCard";
import img1 from './img/01.jpg'


function App() {
  const [search , setSearch] = useState('');  
  const [moviesList ,setMoviesList ] = useState([]);

  const handleChange = (text)=>{
    setSearch(text)
  }
  const searchMovies = async()=>{
    const response = await fetch(`https://www.omdbapi.com/?apikey=756abb2f&s=${search}`)
    const data = await response.json();
    console.log(data);
    setMoviesList(data.Search);
  }
  return (
    <div className="App">
      <h1> React search movies</h1>
      <Search handleChange={handleChange} searchMovies={searchMovies} />
      {moviesList.map((item)=>{
         return  <MovieCard key={item.imdbID} title={item.Title} id={item.imdbID} />
      })}
     <h1> images test</h1>
     <img src="img/03.jpg" />
    </div>
  );
}

export default App;
