import GalleryList from "./galleryList"
import GalleryInfo from "./GalleryInfo"
import { useContext } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Gallery = (props)=>{
    const [galleries, setGalleries] = useContext(Context).galleries
    const [selectedGallery, setSelectedGallery] = useContext(Context).selectedGallery

    return(
        <article className='gallery-view'>
            <GalleryList />
            {selectedGallery && <GalleryInfo />}
            {selectedGallery && <PaintingList />}
            {!selectedGallery&&<h2>Select A Gallery</h2>}
        </article>
    )
}

export default Gallery