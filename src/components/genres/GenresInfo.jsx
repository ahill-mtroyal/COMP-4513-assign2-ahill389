import { Context } from "../../App";
import { useContext } from "react";
import AddFavourite from "../AddFavourite";

const GenresInfo = (props)=>{
    const [selectedGenre,setSelectedGenre] = useContext(Context).selectedGenre
    const addToFavourites = ()=>{
        console.log(`${selectedGenre.genreName} added to favourites`)
    }
    return(
        <div className='genre-info'>
            <h2>{selectedGenre.genreName}</h2>
            <p><a href={selectedGenre.wikiLink}>Wikipedia</a></p>
            <p><span className='genre-description'>{selectedGenre.description}</span></p>
            <AddFavourite handler={addToFavourites}/>
        </div>
    )
}

export default GenresInfo