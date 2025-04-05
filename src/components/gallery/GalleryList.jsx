import Button from "../Button";
import ReversibleList from "../reversibleList";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Context } from "../../App";

//displays list of gallery buttons that update the selectedGallery state with the respective gallery
const GalleryList = (props)=>{
    const [galleries, setGalleries] = useContext(Context).galleries
    const [selectedGallery, setSelectedGallery] = useContext(Context).selectedGallery
    const [paintings, setPaintings] = useContext(Context).paintings
    const [selectedPaintings, setSelectedPaintings] = useContext(Context).selectedPaintings
    const [list, setList] = useState(galleries)

    //I don't want to admit how long this took me to figure out - seems simple in hindsight
    //This useEffect populates the initial list state when galleries is received (has to wait for DB)
    useEffect(()=>{
        //sort list
        const sortedList = galleries.sort((a,b)=>{
            if (a.galleryName > b.galleryName) {return 1}
            else if (a.galleryName < b.galleryName) {return -1}
            else {return 0}
        })
        //set list state
        setList(sortedList)
    }, [galleries])

    //re-render on list update
    useEffect(()=>{
    }, [list])

    //handler for reverse
    const reverse = ()=>{
        const newList = [...list].reverse()
        setList(newList);
      }

    //handler for selected gallery
    const selectGallery = e=>{
        const selected = galleries.find(g=>g.galleryId==e.target.value)
        const galleryPaintings = paintings.filter(p=>p.galleryId==e.target.value)
        setSelectedGallery(selected)
        setSelectedPaintings(galleryPaintings)
    }

    //build list items
    const listItems = list.map(i=>
        <li key={i.galleryId}><Button buttonData={{
            className:'btn btn-list',
            id:i.galleryId,
            handler:selectGallery,
            text:i.galleryName
        }
        }/></li>
    )

    return(
        <ReversibleList handler={reverse} header={'Select A Gallery'} listItems={listItems}/>
    )
    
}

export default GalleryList