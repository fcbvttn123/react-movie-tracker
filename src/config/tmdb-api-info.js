export const key = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDQ4YzYwZWIyYmZjYjZlNTUxMjgzZjc1NGNiZTczZiIsInN1YiI6IjY1ZTIyMGE1NDFhNTYxMDE2MzgzM2VjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qrL0_1i6oMG7DV2A2VuC_ooe_iDk0Cn_2XJFOsgBOU'
    }
};

export const URLs = {
    topRatedMovies: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", 
    popularMovies: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", 
    movieGenres: "https://api.themoviedb.org/3/genre/movie/list?language=en", 
    allTrending: "https://api.themoviedb.org/3/trending/all/week?language=en-US"
}