import { useEffect, useState } from "react";
import { URLs } from "../../config/tmdb-api-info";
import { useFetchTMDB_API } from "../../hooks/useFetchTMDB-API";
import { MovieCards } from "../../components/MovieCards";

export function Home() {

    let [allTrending, setAllTrending] = useState(null)
    let [topRatedMovies, setTopRatedMovies] = useState(null)
    let [popularMovies, setPopularMovies] = useState(null)
    
    useEffect(() => {
        useFetchTMDB_API(URLs.allTrending)
            .then(res => res.json())
            .then(data => {
                setAllTrending(data.results)
            })
        useFetchTMDB_API(URLs.topRatedMovies)
            .then(res => res.json())
            .then(data => {
                setTopRatedMovies(data.results)
            })
        useFetchTMDB_API(URLs.popularMovies)
            .then(res => res.json())
            .then(data => {
                setPopularMovies(data.results)
            })
    }, [])

    return (
        <div>
            {
                allTrending && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">All Trending</h1>
                    <div className="flex gap-x-4 overflow-auto">{allTrending.map(e => <MovieCards key={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
            {
                topRatedMovies && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">Top Rated</h1>
                    <div className="flex gap-x-4 overflow-auto">{topRatedMovies.map(e => <MovieCards key={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
            {
                popularMovies && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">Popular</h1>
                    <div className="flex gap-x-4 overflow-auto">{popularMovies.map(e => <MovieCards key={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
        </div>
    )

}