import Button from "../Button";
import ReversibleList from "../reversibleList";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Context } from "../../App";

//displays list of genre buttons that update the selectedGenre state with the respective genre - mostly copied from Gallery
const GenresList = (props)=>{
    const [genres, setGenres] = useContext(Context).genres
    const [selectedGenre, setSelectedGenre] = useContext(Context).selectedGenre
    const [paintings, setPaintings] = useContext(Context).paintings
    const [paintingGenres, setPaintingGenres] = useContext(Context).paintingGenres
    const [selectedPaintings, setSelectedPaintings] = useContext(Context).selectedPaintings
    const [list, setList] = useState(genres)

    //This useEffect populates the initial list state when galleries is received (has to wait for DB)
    useEffect(()=>{
        //sort list
        const sortedList = genres.sort((a,b)=>{
            if (a.genreName > b.genreName) {return 1}
            else if (a.genreName < b.genreName) {return -1}
            else {return 0}
        })
        //set list state
        setList(sortedList)
    }, [genres])

    //re-render on list update
    useEffect(()=>{
    }, [list])

    //handler for reverse
    const reverse = ()=>{
        const newList = [...list].reverse()
        setList(newList);
      }

    //handler for selected gallery
    const selectGenre = e=>{
        const selected = genres.find(g=>g.genreId==e.target.value)
        const filteredPaintingGenres = paintingGenres.filter(p=>p.genreId==e.target.value)
        const paintingIds = []
        filteredPaintingGenres.forEach(p => {
            paintingIds.push(p.paintingId)  
        })
        const paintingList = paintings.filter(p=>paintingIds.includes(p.paintingId))
        setSelectedGenre(selected)
        setSelectedPaintings(paintingList)
    }

    //build list items
    const listItems = list.map(i=>
        <li key={i.genreId}><Button buttonData={{
            className:'btn btn-list',
            id:i.genreId,
            handler:selectGenre,
            text:i.genreName
        }
        }/></li>
    )

    return(
        <ReversibleList handler={reverse} header={'Select A Genre'} listItems={listItems}/>
    )
    
}

export default GenresList