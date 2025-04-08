import { Context } from "../../App";
import { useContext } from "react";
import AddFavourite from "../AddFavourite";

const GenresInfo = (props)=>{
    const [selectedGenre,setSelectedGenre] = useContext(Context).selectedGenre
    const [genresFavourites, setGenresFavourites] = useContext(Context).genresFavourites

    //handle favouriting
    const favourited = genresFavourites.includes(selectedGenre)?true:false

    const addToFavourites = e=>{
        let newFavourites = [...genresFavourites]

        if(!favourited){
            newFavourites.push(selectedGenre)
            setGenresFavourites(newFavourites)
        } else if (favourited){
            newFavourites = genresFavourites.filter(g=>g.genreId!=selectedGenre.genreId)
            setGenresFavourites(newFavourites)
        }
    }

    return(
        <div className='relative text-center'>
            <div className='flex flex-col h-full text-xl space-y-10  pt-5 '>
                <h2 className="font-bold">{selectedGenre.genreName}</h2>
                <p><a href={selectedGenre.wikiLink}>Wikipedia</a></p>
                <p className='overflow-y-auto'><span>{selectedGenre.description}</span></p>
            </div>
            <AddFavourite handler={addToFavourites} favourited={favourited} id={selectedGenre.genreId}/>
        </div>
    )
}

export default GenresInfo