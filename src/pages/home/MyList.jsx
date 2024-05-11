import { useEffect, useState } from "react"
import { useGetMyList } from "../../hooks/useGetMyList"
import { useGetAccountInfo } from "../../hooks/useGetAccountInfo"
import { MovieCards } from "../../components/MovieCards"

export function MyList() {

    let [list, setList] = useState(null)

    useEffect(() => {
        async function getMyList() {
            let res = await useGetMyList(useGetAccountInfo().email)
            setList(res)
        }
        getMyList()
    }, [])

    return (
        <div>
            {list && list.map(e => <MovieCards key={e.rowId} id={e.id} imgName={e.imgName} title={e.title} renderedInMyList={true} />)}
        </div>
    )

}