import { Context } from "../../App";
import { useContext } from "react";

const ArtistsInfoCard = (props)=>{
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist
    return(
        <div className='info-card'>
            <h2>{`${selectedArtist.firstName} ${selectedArtist.lastName}`}</h2>
            <img src={`/artists/square/${selectedArtist.artistId}.jpg`} alt={`${selectedArtist.firstName} ${selectedArtist.lastName}`}/>
            <p>{`${selectedArtist.yearOfBirth} - ${selectedArtist.yearOfDeath}`}</p>
            <p>{selectedArtist.nationality}</p>
            <p>{selectedArtist.gender=='M'? 'Male': 'Female'}</p>
            <p><a href={selectedArtist.artistLink}>Wikipedia</a></p>
            <p><span className='artist-details'>{selectedArtist.details}</span></p>
        </div>
    )
}

export default ArtistsInfoCard