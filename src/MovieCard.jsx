import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="flex flex-col justify-between items-center bg-purple-800 p-2 w-64 h-96 rounded-lg shadow-md">
            <div className="bg-purple-700 w-full text-white p-1 text-center rounded-t-lg">
                <p>{movie.Year}</p>
            </div>

            <div className="w-full h-3/4 flex justify-center items-center">
                <img
                    className="w-full h-full object-cover"
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                    alt={movie.Title}
                />
            </div>

            <div className="w-full bg-purple-700 text-white p-2 text-center rounded-b-lg overflow-hidden">
                <span>{movie.Type}</span>
                <h3 className="font-bold overflow-hidden max-h-12">
                    {movie.Title}
                </h3>
            </div>
        </div>
    );
};

export default MovieCard;
