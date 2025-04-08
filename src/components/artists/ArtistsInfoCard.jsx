import { Context } from "../../App";
import { useContext } from "react";

const ArtistsInfoCard = (props)=>{
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist
    return(
        <div className='flex flex-col h-full text-xl space-y-10  pt-5 '>
            <h2 className="font-bold">{`${selectedArtist.firstName} ${selectedArtist.lastName}`}</h2>
            <img className="rounded-lg" src={`COMP-4513-assign2-ahill389/artists/square/${selectedArtist.artistId}.jpg`} alt={`${selectedArtist.firstName} ${selectedArtist.lastName}`}/>
            <p>{`${selectedArtist.yearOfBirth} - ${selectedArtist.yearOfDeath}`}</p>
            <p>{selectedArtist.nationality}</p>
            <p>{selectedArtist.gender=='M'? 'Male': 'Female'}</p>
            <p><a href={selectedArtist.artistLink}>Wikipedia</a></p>
            <p className='overflow-y-auto'><span>{selectedArtist.details}</span></p>
        </div>
    )
}

export default ArtistsInfoCard