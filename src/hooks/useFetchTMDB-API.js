import { key } from "../config/tmdb-api-info";

export async function useFetchTMDB_API(url) {
    try {
        let res = await fetch(url, key)
        return res
    } catch (error) {
        console.error(error)
    }
}