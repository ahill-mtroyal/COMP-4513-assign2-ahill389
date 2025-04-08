import { useContext,useEffect } from "react"
import { Context } from "../../App"
import PaintingThumb from "./PaintingThumb"
import Button from "../Button"

const PaintingList = (props)=>{
    const [selectedPaintings, setSelectedPaintings] = useContext(Context).selectedPaintings
    const [artists, setArtists] = useContext(Context).artists
    const [galleries, setGalleries] = useContext(Context).galleries

    const listItems = selectedPaintings.map(p=>
        <li key={p.paintingId}>
            <PaintingThumb painting={p}/>
        </li>
    )

    //sorting handlers
    const sortArtist = ()=>{
        const sortedArtist = [...selectedPaintings].sort((a,b)=>{
            const artistA = artists.find(i=>i.artistId==a.artistId)
            const artistB = artists.find(i=>i.artistId==b.artistId)
            if (artistA.lastName > artistB.lastName){return 1}
            else if (artistA.lastName < artistB.lastName){return -1}
            else {return 0}
        })
        setSelectedPaintings(sortedArtist)
    }

    const sortTitle = ()=>{
        const sortedTitle = [...selectedPaintings].sort((a,b)=>{
            if (a.title > b.title){return 1}
            else if (a.title < b.title){return -1}
            else {return 0}
        })
        setSelectedPaintings(sortedTitle)
    }

    const sortGallery = ()=>{
        const sortedGallery = [...selectedPaintings].sort((a,b)=>{
            const galleryA = galleries.find(i=>i.galleryId==a.galleryId)
            const galleryB = galleries.find(i=>i.galleryId==b.galleryId)
            if (galleryA.galleryName > galleryB.galleryName){return 1}
            else if (galleryA.galleryName < galleryB.galleryName){return -1}
            else {return 0}
        })
        setSelectedPaintings(sortedGallery)
    }

    const sortYear = ()=>{
        const sortedYear = [...selectedPaintings].sort((a,b)=>{
            if (a.yearOfWork > b.yearOfWork){return 1}
            else if (a.yearOfWork < b.yearOfWork){return -1}
            else {return 0}
        })
        setSelectedPaintings(sortedYear)
    }

    return(
        <div className='painting-list'>
            <h2>Paintings</h2>
            <Button buttonData={{
                handler:sortArtist,
                text:'Artist',
                classNames:'btn btn-sort'
            }}/>
            <Button buttonData={{
                handler:sortTitle,
                text:'Title',
                classNames:'btn btn-sort'
            }}/>
            <Button buttonData={{
                handler:sortGallery,
                text:'Gallery',
                classNames:'btn btn-sort'
            }}/>
            <Button buttonData={{
                handler:sortYear,
                text:'Year',
                classNames:'btn btn-sort'
            }}/>
            <ul>
                {listItems}
            </ul>
        </div>
    )

}

export default PaintingList