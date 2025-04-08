import { Context } from "../../App";
import { useContext } from "react";

const GalleryInfoCard = (props)=>{
    const [selectedGallery, setSelectedGallery] = useContext(Context).selectedGallery
    return(
        <div className='flex flex-col items-center justify-center h-3/5 text-xl space-y-10 text-center'>
            <h2 className="font-bold text-3xl">{selectedGallery.galleryName}</h2>
            <p><span className='native-name'>"{selectedGallery.galleryNativeName}"</span></p>
            <p>{selectedGallery.galleryCity}</p>
            <p>{selectedGallery.galleryAddress}</p>
            <p>{selectedGallery.galleryCountry}</p>
            <p><a href={selectedGallery.galleryWebSite}>{selectedGallery.galleryWebSite}</a></p>
        </div>
    )
}

export default GalleryInfoCard