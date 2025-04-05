import GalleryList from "./galleryList"
import GalleryInfo from "./GalleryInfo"
import { useState, useContext } from "react";
import { Context } from "../../App";
import PaintingList from "../paintings/PaintingList";

const Gallery = (props)=>{
    const [galleries, setGalleries] = useContext(Context).galleries
    const [selectedGallery, setSelectedGallery] = useContext(Context).selectedGallery

    return(
        <article>
            <GalleryList />
            {selectedGallery && <GalleryInfo />}
            {selectedGallery && <PaintingList />}
        </article>
    )
}

export default Gallery