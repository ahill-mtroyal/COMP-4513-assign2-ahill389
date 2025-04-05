import GenresList from "./GenresList";
import GenresInfo from "./GenresInfo";
import { useContext } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Genres = (props)=>{
    const [genres, setGenres] = useContext(Context).genres
    const [selectedGenre, setSelectedGenre] = useContext(Context).selectedGenre

    return(
        <article className='genre-view'>
            <GenresList />
            {selectedGenre && <GenresInfo />}
            {selectedGenre && <PaintingList />}
        </article>
    )
}

export default Genres