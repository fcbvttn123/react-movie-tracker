import { useEffect, useState } from "react"
import { useGetMyList } from "../../hooks/useGetMyList"
import { useGetAccountInfo } from "../../hooks/useGetAccountInfo"
import { MovieCards } from "../../components/MovieCards"

export function MyList() {

    let [list, setList] = useState(null)

    async function getMyList() {
        let res = await useGetMyList(useGetAccountInfo().email)
        setList(res)
    }

    useEffect(() => {
        getMyList()
    }, [])

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {list && list.map(e => <MovieCards key={e.movieId} id={e.movieId} imgName={e.imgName} title={e.title} renderedInMyList={true} rowId={e.id} />)}
        </div>
    )

}