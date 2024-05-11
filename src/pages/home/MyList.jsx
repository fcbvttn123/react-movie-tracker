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
        <div>
            {list && list.map(e => <MovieCards key={e.movieId} id={e.movieId} imgName={e.imgName} title={e.title} renderedInMyList={true} rowId={e.id} />)}
        </div>
    )

}