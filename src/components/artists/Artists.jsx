import { useContext } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Artists = (props)=>{
    const [artists, setArtists] = useContext(Context).artists
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist
    return(
        <article>
            
        </article>
    )
}

export default Artists