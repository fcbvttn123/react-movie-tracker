import {useTmdbImageUrl} from "../hooks/useTmdbImageUrl"

export function MovieCards({imgName, title}) {
    return (
        <div className="min-w-72">
            <div className="w-48 aspect-square">
                <img className="w-full h-full object-cover" src={useTmdbImageUrl(imgName)} />
            </div>
            <h1>{title ? title : "No Title"}</h1>
        </div>
    )
}