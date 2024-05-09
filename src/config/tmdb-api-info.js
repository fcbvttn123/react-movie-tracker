export const key = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDQ4YzYwZWIyYmZjYjZlNTUxMjgzZjc1NGNiZTczZiIsInN1YiI6IjY1ZTIyMGE1NDFhNTYxMDE2MzgzM2VjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qrL0_1i6oMG7DV2A2VuC_ooe_iDk0Cn_2XJFOsgBOU'
    }
};

export const URLs = {
    // Home Page
    allTrending: "https://api.themoviedb.org/3/trending/all/week?language=en-US", 
    // TV Shows
    showGenres: "https://api.themoviedb.org/3/genre/tv/list", 
    trendingShows: "https://api.themoviedb.org/3/trending/tv/week?language=en-US", 
    airingShowsToday: "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1", 
    popularShows: "https://api.themoviedb.org/3/tv/popular", 
    // Movies
    movieGenres: "https://api.themoviedb.org/3/genre/movie/list?language=en", 
    topRatedMovies: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", 
    popularMovies: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", 
    nowPlayingMovies: "https://api.themoviedb.org/3/movie/now_playing",
    upComingMovies: "https://api.themoviedb.org/3/movie/upcoming"
}