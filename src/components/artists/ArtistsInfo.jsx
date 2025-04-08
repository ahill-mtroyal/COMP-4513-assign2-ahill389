import { Context } from "../../App";
import { useContext } from "react";
import AddFavourite from "../AddFavourite";
import ArtistsInfoCard from "./ArtistsInfoCard";

const ArtistInfo = (props)=>{
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist
    const [artistsFavourites, setArtistsFavourites] = useContext(Context).artistsFavourites
    
    //handle favouriting
    const favourited = artistsFavourites.includes(selectedArtist)?true:false

    const addToFavourites = e=>{
        let newFavourites = [...artistsFavourites]

        if(!favourited){
            newFavourites.push(selectedArtist)
            setArtistsFavourites(newFavourites)
        } else if (favourited){
            newFavourites = artistsFavourites.filter(a=>a.artistId!=selectedArtist.artistId)
            setArtistsFavourites(newFavourites)
        }
    }

    return(
        <div className='relative text-center'>
            <ArtistsInfoCard />
            <AddFavourite handler={addToFavourites} favourited={favourited} id={selectedArtist.artistId}/>
        </div>
    )
}

export default ArtistInfo