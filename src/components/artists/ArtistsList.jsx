import Button from "../Button";
import ReversibleList from "../reversibleList";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Context } from "../../App";

//displays list of artist buttons that update the selectedArtist state with the respective artist - mostly copied from galleriList, maybe couldve been made modular in the first place but w/e
const ArtistList = (props)=>{
    const [artists, setArtists] = useContext(Context).artists
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist
    const [paintings, setPaintings] = useContext(Context).paintings
    const [selectedPaintings, setSelectedPaintings] = useContext(Context).selectedPaintings
    const [list, setList] = useState([])

    //This useEffect populates the initial list state when artist is received
    useEffect(()=>{
        //sort list
        const sortedList = artists.sort((a,b)=>{
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {return 1}
            else if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {return -1}
            else if (a.firstName > b.firstName) {return 1}
            else if (a.firstName < b.firstName) {return -1}
            else {return 0}
        })
        //set list state
        console.log(sortedList)
        setList(sortedList)
    }, [artists])

    //re-render on list update
    useEffect(()=>{
    }, [list])

    //handler for reverse
    const reverse = ()=>{
        const newList = [...list].reverse()
        setList(newList);
      }

    //handler for selected artist
    const selectArtist = e=>{
        const selected = artists.find(a=>a.artistId==e.target.value)
        const artistPaintings = paintings.filter(p=>p.artistId==e.target.value)
        setSelectedArtist(selected)
        setSelectedPaintings(artistPaintings)
    }

    //build list items
    const listItems = list.map(i=>
        <li key={i.artistId}><Button buttonData={{
            className:'btn btn-list',
            id:i.artistId,
            handler:selectArtist,
            text:`${i.firstName} ${i.lastName}`
        }
        }/></li>
    )

    return(
        <ReversibleList handler={reverse} header={'Select An Artist'} listItems={listItems}/>
    )
    
}

export default ArtistList