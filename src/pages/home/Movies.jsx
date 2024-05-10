import { useEffect, useState } from "react"
import { useFetchTMDB_API } from "../../hooks/useFetchTMDB-API"
import { URLs } from "../../config/tmdb-api-info"
import { MovieCards } from "../../components/MovieCards"

export function Movies() {

    const [topRated, setTopRated] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        // Fetch top-rated movies
        useFetchTMDB_API(URLs.topRatedMovies)
            .then(res => res.json())
            .then(data => {
                setTopRated(data.results)
            })
        // Fetch movies that are currently in theatres
        useFetchTMDB_API(URLs.nowPlayingMovies)
            .then(res => res.json())
            .then(data => {
                setNowPlaying(data.results)
            })
        // Fetch upcoming movies 
        useFetchTMDB_API(URLs.upComingMovies)
            .then(res => res.json())
            .then(data => {
                setUpcoming(data.results)
            })
    }, [])

    return (
        <div>
            {
                topRated && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">Top Rated</h1>
                    <div className="flex gap-x-4 overflow-auto">{topRated.map(e => <MovieCards key={e.id} id={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
            {
                nowPlaying && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">Now Playing</h1>
                    <div className="flex gap-x-4 overflow-auto">{nowPlaying.map(e => <MovieCards key={e.id} id={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
            {
                upcoming && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">Upcoming</h1>
                    <div className="flex gap-x-4 overflow-auto">{upcoming.map(e => <MovieCards key={e.id} id={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
        </div>
    )

}