import ArtistList from "./ArtistsList";
import ArtistInfo from "./ArtistsInfo";
import { useContext, useEffect } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Artists = (props)=>{
    const [artists, setArtists] = useContext(Context).artists
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist

    return(
        <article className='bg-white/50 h-4/5 w-3/4 rounded-lg text-black grid grid-cols-5 grid-rows-1 gap-4'>
            <ArtistList />
            {selectedArtist && <ArtistInfo />}
            {selectedArtist && <PaintingList />}
        </article>
    )
}

export default Artists