import { useEffect, useState } from "react"
import { useFetchTMDB_API } from "../../hooks/useFetchTMDB-API"
import { URLs } from "../../config/tmdb-api-info"
import { MovieCards } from "../../components/MovieCards"

export function TVShows() {

    const [trending, setTrending] = useState([])
    const [airingToday, setAiringToday] = useState([])
    const [popular, setPopular] = useState([])

    useEffect(() => {
        // Fetch Trending TV Shows 
        useFetchTMDB_API(URLs.trendingShows)
            .then(res => res.json())
            .then(data => {
                let newArr = []
                data.results.forEach((e, i) => {
                    i < 10 && newArr.push(e)
                })
                setTrending(newArr)
            })
        // Fetch a list of TV shows airing today
        useFetchTMDB_API(URLs.airingShowsToday)
            .then(res => res.json())
            .then(data => {
                let newArr = []
                data.results.forEach((e, i) => {
                    i < 10 && newArr.push(e)
                })
                setAiringToday(newArr)
            })
        // Fetch popular TV shows 
        useFetchTMDB_API(URLs.popularShows)
            .then(res => res.json())
            .then(data => {
                let newArr = []
                data.results.forEach((e, i) => {
                    i < 10 && newArr.push(e)
                })
                setPopular(newArr)
            })
    }, [])

    return (
        <div>
            {
                trending && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">Trending</h1>
                    <div className="flex gap-x-4 overflow-auto">{trending.map(e => <MovieCards key={e.id} id={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
            {
                airingToday && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">TV shows airing today</h1>
                    <div className="flex gap-x-4 overflow-auto">{airingToday.map(e => <MovieCards key={e.id} id={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
            {
                popular && 
                <div className="mt-3">
                    <h1 className="text-xl font-semibold">Popular</h1>
                    <div className="flex gap-x-4 overflow-auto">{popular.map(e => <MovieCards key={e.id} id={e.id} imgName={e.backdrop_path} title={e.title}/>)}</div>
                </div>
            }
        </div>
    )

}