import ArtistList from "./ArtistsList";
import ArtistInfo from "./ArtistsInfo";
import { useContext } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Artists = (props)=>{
    const [artists, setArtists] = useContext(Context).artists
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist
    return(
        <article className='artist-view'>
            <ArtistList />
            {selectedArtist && <ArtistInfo />}
            {selectedArtist && <PaintingList />}
        </article>
    )
}

export default Artists