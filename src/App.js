import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  // <-- Corrected declaration here
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller about dreams within dreams.",
      posterURL: "https://link-to-image.com/inception.jpg",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "The Dark Knight",
      description: "The rise of Batman and his battle with the Joker.",
      posterURL: "https://link-to-image.com/dark-knight.jpg",
      rating: 9.0,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer: "",
  });

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitleFilter(value);
    filterMovies(value, ratingFilter);
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    setRatingFilter(value);
    filterMovies(titleFilter, value);
  };

  const filterMovies = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        (title
          ? movie.title.toLowerCase().includes(title.toLowerCase())
          : true) && (rating ? movie.rating >= rating : true)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <div className="add-movie-form">
        <input
          type="text"
          placeholder="Movie Title"
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie Description"
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Rating"
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Trailer Link"
          onChange={(e) =>
            setNewMovie({ ...newMovie, trailer: e.target.value })
          }
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
