import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../CustomHooks/useMovies";
import { TMDB_IMAGE_URL, NO_IMAGE_URL } from "../../constants/TMDB_API";
import YouTube from "react-youtube";

const Trailer = () => {
  const { movieTrailer, getMovieTrailer } = useMovies();
  const params = useParams();
  const opts = {
    width: "1200",
    height: "700",
  };

  useEffect(() => {
    getMovieTrailer(params.id);
  }, []);

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const renderTrailer = () => {
    const trailer = movieTrailer.data.videos.results.find(
      (movie) => movie.name === "Official Trailer"
    );
    return <YouTube videoId={trailer?.key} opts={opts} onReady={onReady} />;
  };

  return (
    <>
      <div className="trailer-container mx-auto w-100 aspect-video">
        {movieTrailer && renderTrailer()}
      </div>
      <div className="flex justify-center gap-5 flex-wrap mt-8">
        {movieTrailer &&
          movieTrailer.data.credits?.cast.map((actor) => {
            return (
              <div
                className="mx-10 w-60 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                key={actor.id}
              >
                <img
                  className="rounded-t object-contain w-60"
                  src={
                    actor.profile_path
                      ? `${TMDB_IMAGE_URL}${actor.profile_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="actor-profile"
                ></img>
                <div className="p-5">
                  <h5 className="w-100 text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    {actor.original_name}
                  </h5>
                  <p className="w-100 font-normal text-gray-700 mb-3 dark:text-gray-400">
                    Character :{" "}
                    <span className="text-red-950">{actor.character}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Trailer;
