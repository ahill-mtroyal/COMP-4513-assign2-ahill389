import GalleryInfoCard from "./GalleryInfoCard";
import { Context } from "../../App";
import { useContext } from "react";
import AddFavourite from "../AddFavourite";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const GalleryInfo = (props)=>{
    const [selectedGallery, setSelectedGallery] = useContext(Context).selectedGallery
    const [galleryFavourites, setGalleryFavourites] = useContext(Context).galleryFavourites
    const addToFavourites = ()=>{
        console.log(`${selectedGallery.galleryName} added to favourites`)
    }
    //position for map 
    const mapPosition = [selectedGallery.latitude,selectedGallery.longitude]
    //position updater for map on state change
    function ChangePosition (props) {
        const map = useMap()
        map.setView(props.center,13)
        map.closePopup()
        return null;
    }

    return(
        <div className='gallery-info'>
            <GalleryInfoCard />
            <AddFavourite handler={addToFavourites}/>
            <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false} style={{height:'20vh', width: '600px'}}>
                <ChangePosition center={mapPosition}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mapPosition}>
                    <Popup>
                        {selectedGallery.galleryName}<br /> {selectedGallery.galleryAddress}, {selectedGallery.galleryCity}, {selectedGallery.galleryCountry}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default GalleryInfo