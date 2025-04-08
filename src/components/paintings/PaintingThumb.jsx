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
        <div className='ml-5 mr-5 mb-5 w-32 flex flex-wrap h-100 overflow-hidden bg-white/50 rounded-xl'>
            <img className='painting-thumb' src={`/paintings/square/${painting.imageFileName}.jpg`} alt={painting.title} onClick={paintingModal} style={{height:'128px', width:'128px'}}/><br/>
            <strong className="text-center max-w-32 w-32 p-1"><i className=''>{painting.title}</i></strong><br/>
            <span className="text-center w-full">{`${artist.firstName} ${artist.lastName}`}</span><br/>
            <span className="text-center w-full">{painting.yearOfWork}</span><br/>
            <span className="text-center w-full">{gallery.galleryName}</span><br/>
            <span className="text-center w-full">{painting.medium}</span><br/>
            <span className="text-center w-full">{`${painting.width} x ${painting.height}`}</span>
        </div>
    )
}

export default PaintingThumb