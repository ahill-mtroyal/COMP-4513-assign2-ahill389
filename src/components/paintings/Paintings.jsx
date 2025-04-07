import { useContext, useEffect } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";
import PaintingFilters from "./PaintingFilters";

const Paintings = (props)=>{
    const [paintings, setPaintings] = useContext(Context).paintings
    const [selectedPaintings, setSelectedPaintings] = useContext(Context).selectedPaintings

    useEffect(()=>{
        setSelectedPaintings(paintings)
    }, [paintings])

    return(
        <article className='painting-view'>
            <PaintingFilters />
            <PaintingList />
        </article>
    )
}

export default Paintings