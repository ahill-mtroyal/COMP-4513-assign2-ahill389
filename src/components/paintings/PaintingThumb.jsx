import { useContext } from "react"
import { Context } from "../../App"
import ModalPainting from "../modals/ModalPainting"

const PaintingThumb = (props)=>{
    const [artists,setArtists] = useContext(Context).artists
    const [galleries,setGalleries] = useContext(Context).galleries
    const [modal,setModal] = useContext(Context).modal
    const [selectedPainting, setSelectedPainting] = useContext(Context).selectedPainting
    const painting = props.painting
    const artist = artists.find(a=>a.artistId==painting.artistId)
    const gallery = galleries.find(g=>g.galleryId==painting.galleryId)

    const paintingModal = e=>{
        setSelectedPainting(painting)
        setModal(<ModalPainting />)
    } 

    return(
        <div className='painting-card-small'>
            <img className='painting-thumb' src={`/paintings/square/${painting.imageFileName}.jpg`} alt={painting.title} onClick={paintingModal} style={{height:'100px', width:'100px'}}/><br/>
            <strong><i>{painting.title}</i></strong><br/>
            <span>{`${artist.firstName} ${artist.lastName}`}</span><br/>
            <span>{painting.yearOfWork}</span><br/>
            <span>{gallery.galleryName}</span><br/>
            <span>{painting.medium}</span><br/>
            <span>{`${painting.width} x ${painting.height}`}</span>
        </div>
    )
}

export default PaintingThumb