import { useSelector } from 'react-redux';
import { MovieSchema } from '../interfaces/apiInterface';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/MovieDetails.css'
import Mr from '../images/mr.jpg'

interface RootState {
  movies: {
    movieList: MovieSchema[];
  };
}
const dummyOverview = "A movie criticism is written by a scholar or expert in film studies to discuss the movie within a historical, social, political, or theoretical context. It differs from the opinion or recommendation that a movie review provides in terms of length, content and focus. Criticisms can be found in cinema studies journals as well as discipline-specific sources, depending on the plot or themes of the movie."

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieSchema | null>(null);
  const data = useSelector((state: RootState) => state.movies.movieList);
  const { id } = useParams<{ id: string | undefined }>();

  useEffect(() => {
    
    if (id) {
      const filteredMovie = data.find((movie) => movie.id === Number(id));
      if (filteredMovie) {
        setSelectedMovie(filteredMovie);
      }
    }
  }, [data, id, selectedMovie]);



  return (
    <div>
      <Navbar />
      <h2 className='heading'>Movie Details</h2>

      {selectedMovie && (
        <div className='details-container'>
          <div className='img-container'>
            <img src={selectedMovie.backdrop_path ? `https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}` : Mr} alt="movie poster" />
          </div>

          <div className='details'>
            <h2>Title: {selectedMovie.title ? selectedMovie.title : selectedMovie.name}</h2>
            <p>
              <span className='special-headings'>Release_date:</span>
              {selectedMovie.release_date ? selectedMovie.release_date : selectedMovie.first_air_date}
            </p>
            <p>
              <span className='special-headings'>Overview: </span>
              {selectedMovie.overview ? selectedMovie.overview : dummyOverview}
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

export default MovieDetails;
