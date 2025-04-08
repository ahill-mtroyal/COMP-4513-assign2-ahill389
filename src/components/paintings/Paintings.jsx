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
        <article className='bg-white/50 h-4/5 w-3/4 rounded-lg text-black grid grid-cols-4 grid-rows-1 gap-4'>
            <PaintingFilters />
            <PaintingList />
        </article>
    )
}

export default Paintings