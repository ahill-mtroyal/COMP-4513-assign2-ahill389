import ArtistList from "./ArtistsList";
import ArtistInfo from "./ArtistsInfo";
import { useContext, useEffect } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Artists = (props)=>{
    const [artists, setArtists] = useContext(Context).artists
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist

    return(
        <article className='artist-view h-0'>
            <ArtistList />
            {selectedArtist && <ArtistInfo />}
            {selectedArtist && <PaintingList />}
        </article>
    )
}

export default Artists