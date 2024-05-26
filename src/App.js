import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=9927e0db";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search || []);
    };

    useEffect(() => {
        searchMovies("Superman");
    }, []);

    return (
        <div className="h-full flex flex-col items-center bg-purple-pattern bg-cover bg-fixed">
            <h1 className="text-4xl w-100 text-center my-4 text-white bg-purple-700 bg-opacity-90 rounded-full px-6 py-2 shadow-lg">Movie Land</h1>

            <div className="flex flex-row w-screen p-10">
                <input
                    className="w-full border border-purple-600 p-2 rounded bg-purple-800 text-purple-300 placeholder-purple-500"
                    placeholder="Search for movies"
                    value={searchWord}
                    onChange={(e) => {
                        setSearchWord(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') searchMovies(searchWord)
                    }}
                />
                <img
                    className="w-10 h-10 ml-2 cursor-pointer"
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {
                        searchMovies(searchWord);
                    }}
                />
            </div>

            {movies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <div>
                    <h2 className="text-purple-500">No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
