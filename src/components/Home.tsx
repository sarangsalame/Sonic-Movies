import { useState, useEffect } from 'react';
import '../styles/Home.css';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { setMovieList } from '../store/slices/apiSlice';
import { FieldState } from '../components/Navbar';
import { setFields } from '../store/slices/fieldSlice';
import { RootStates } from '../store/store';

function Home() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [categories, setCategories] = useState<string>('');
  const dispatch = useDispatch();
  const fields = useSelector((state: FieldState) => state.fields.filed)
  const movieList = useSelector((state: RootStates) => state.movies.movieList);
  
  useEffect(() => {
    const getApiData = () => {
      fetch(
        `https://api.themoviedb.org/3/${fields}/popular?api_key=${apiKey}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(setMovieList(json.results));
        })
        .catch((err) => console.error('error:' + err));
    };
    getApiData();

  }, [fields,categories]);

  const onCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategories(e.target.value)
    fetch(`https://api.themoviedb.org/3/${fields}${e.target.value}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(json => {

        dispatch(setMovieList(json.results));
      })
  }

  return (
    <div className="App">
      <Navbar />

      <div className="filed-parent">
        {/* Dropdown menu for field selection */}
        <select
          className="dropdown"
          onChange={(e) => dispatch(setFields(e.target.value))}
          value={fields}
        >
          <option value="movie">Movie</option>
          <option value="tv">TV Shows</option>
        </select>

        {/* Dropdown menu for category selection */}
        <select
          className="dropdown"
          onChange={(e) => {
            onCategoryChange(e)
          }}
          value={categories}
        >
          <option value="/popular">Popular</option>
          <option value="/top_rated">Top Rated</option>
          {fields !== "tv" && <option value="/upcoming">Upcoming</option>}
          {fields !== "tv" && <option value="/now_playing">Now Playing</option>}
        </select>
      </div>

      {/* Card Container */}
      <div className="cards_Container">
        {movieList && movieList.map((movie) => (
          <Card
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title?movie.title:movie.name}
            movieId={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
