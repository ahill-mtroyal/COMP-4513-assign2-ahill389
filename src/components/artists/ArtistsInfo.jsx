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
            console.log(`${selectedArtist.firstName} ${selectedArtist.lastName} was favourited.`)
            newFavourites.push(selectedArtist)
            setArtistsFavourites(newFavourites)
        } else if (favourited){
            console.log(`${selectedArtist.firstName} ${selectedArtist.lastName} removed from favourites.`)
            newFavourites = artistsFavourites.filter(a=>a.artistId!=selectedArtist.artistId)
            setArtistsFavourites(newFavourites)
        }
    }

    return(
        <div className='artist-info'>
            <ArtistsInfoCard />
            <AddFavourite handler={addToFavourites} favourited={favourited} id={selectedArtist.artistId}/>
        </div>
    )
}

export default ArtistInfo