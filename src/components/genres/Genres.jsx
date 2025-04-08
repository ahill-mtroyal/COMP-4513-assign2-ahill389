import GenresList from "./GenresList";
import GenresInfo from "./GenresInfo";
import { useContext } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Genres = (props)=>{
    const [genres, setGenres] = useContext(Context).genres
    const [selectedGenre, setSelectedGenre] = useContext(Context).selectedGenre

    return(
        <article className='bg-white/50 h-4/5 w-3/4 rounded-lg text-black grid grid-cols-5 grid-rows-1 gap-4'>
            <GenresList />
            {selectedGenre && <GenresInfo />}
            {selectedGenre && <PaintingList />}
        </article>
    )
}

export default Genres