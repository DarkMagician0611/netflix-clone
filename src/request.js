const API_KEY = "65ed0895797e1a6799b7019491d51ea5";

export const endPoints = {
  netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  trendingNow: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
};

export const imagePathPrefix = "https://image.tmdb.org/t/p/original";
