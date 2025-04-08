import GalleryList from "./galleryList"
import GalleryInfo from "./GalleryInfo"
import { useContext } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Gallery = (props)=>{
    const [galleries, setGalleries] = useContext(Context).galleries
    const [selectedGallery, setSelectedGallery] = useContext(Context).selectedGallery

    return(
        <article className='bg-white/50 h-4/5 w-3/4 text-black grid grid-cols-5 grid-rows-1 gap-4'>
            <GalleryList />
            {selectedGallery && <GalleryInfo />}
            {selectedGallery && <PaintingList />}
            {!selectedGallery&&<h2>Select A Gallery</h2>}
        </article>
    )
}

export default Gallery