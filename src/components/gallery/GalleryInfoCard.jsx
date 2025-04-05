import { Context } from "../../App";
import { useContext } from "react";

const GalleryInfoCard = (props)=>{
    const [selectedGallery, setSelectedGallery] = useContext(Context).selectedGallery
    return(
        <div className='info-card'>
            <h2>{selectedGallery.galleryName}</h2>
            <p><span className='native-name'></span>{selectedGallery.galleryNativeName}</p>
            <p>{selectedGallery.galleryCity}</p>
            <p>{selectedGallery.galleryAddress}</p>
            <p>{selectedGallery.galleryCountry}</p>
            <p><a href={selectedGallery.galleryWebSite}>{selectedGallery.galleryWebSite}</a></p>
        </div>
    )
}

export default GalleryInfoCard