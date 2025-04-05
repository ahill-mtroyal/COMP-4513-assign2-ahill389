import { Context } from "../../App";
import { useContext } from "react";
import AddFavourite from "../AddFavourite";
import ArtistsInfoCard from "./ArtistsInfoCard";

const ArtistInfo = (props)=>{
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist
    const [artistsFavourites, setArtistsFavourites] = useContext(Context).artistsFavourites
    const addToFavourites = ()=>{
        console.log(`${selectedArtist.lastName} added to favourites`)
    }

    return(
        <div className='artist-info'>
            <ArtistsInfoCard />
            <AddFavourite handler={addToFavourites}/>
        </div>
    )
}

export default ArtistInfo