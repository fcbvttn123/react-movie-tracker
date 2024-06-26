import { useTmdbImageUrl } from "../hooks/useTmdbImageUrl"
import { PlusIcon } from "@heroicons/react/16/solid"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { firestoreDb, myListCollection } from "../config/firebase-config"
import { useAddToCollection } from "../hooks/useAddToCollection"
import { useGetAccountInfo } from "../hooks/useGetAccountInfo"
import { useDeleteFromCollection } from "../hooks/useDeleteFromCollection"

export function MovieCards({id, imgName, title, renderedInMyList = false, rowId=null}) {

    async function handleDeleteClick() {
        await useDeleteFromCollection(firestoreDb, "myList", rowId)
        window.location.reload();
    }

    return (
        <div>
            <div className="w-48 aspect-square">
                <img className="w-full h-full object-cover" src={useTmdbImageUrl(imgName)} />
            </div>
            <h1>{title ? title : "No Title"}</h1>
            {
                !renderedInMyList 
                ? 
                <button onClick={() => useAddToCollection(myListCollection, {movieId: id, imgName, title, email: useGetAccountInfo().email})} className="flex items-center gap-x-2 bg-slate-200 p-4 rounded-l hover:bg-slate-400">
                    <PlusIcon className="w-4 h-4" />
                    <span>Add to My List</span>
                </button> 
                : 
                <button onClick={handleDeleteClick} className="flex items-center gap-x-2 bg-slate-200 p-4 rounded-l hover:bg-slate-400">
                    <XMarkIcon className="w-4 h-4" />
                    <span>Remove from My List</span>
                </button>
            }
        </div>
    )

}