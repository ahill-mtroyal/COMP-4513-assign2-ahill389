import { useContext } from "react"
import { Context } from "../../App"
import AddFavourite from "../AddFavourite"
import ColourBox from "./ColourBox"

const PaintingCard = (props)=>{
    const [artists,setArtists] = useContext(Context).artists
    const [galleries,setGalleries] = useContext(Context).galleries
    const [paintingFavourites, setPaintingFavourites] = useContext(Context).paintingFavourites
    const [selectedPainting, setSelectedPainting] = useContext(Context).selectedPainting
    const painting = selectedPainting
    const artist = artists.find(a=>a.artistId==painting.artistId)
    const gallery = galleries.find(g=>g.galleryId==painting.galleryId)
    const favourited = paintingFavourites.includes(painting)

    const addToFavourites = e=>{
        let newFavourites = [...paintingFavourites]

        if(!favourited){
            newFavourites.push(painting)
            setPaintingFavourites(newFavourites)
        } else if (favourited){
            newFavourites = paintingFavourites.filter(p=>p.paintingId!=painting.paintingId)
            setPaintingFavourites(newFavourites)
        }
    }

    const json = JSON.parse(painting.jsonAnnotations)
    const colourArray = json.dominantColors

    return(
        <div className='flex w-full h-full'>
            <div className="h=full w-full">
                <img className='h-full w-full object-contain' src={`https://ahill-mtroyal.github.io/COMP-4513-assign2-ahill389/paintings/full/${painting.imageFileName}.jpg`} alt={painting.title} />
            </div>
            
            <div className='flex flex-col w-1/2 space-y-2 p-3 border-1 pt-10 bg-white'>
                <strong className='text-center'>{painting.title}</strong>
                <table className='relative'>
                <AddFavourite handler={addToFavourites} favourited={favourited} id={painting.paintingId}/>
                    <tbody>
                        <tr className="font-bold">
                            <td>Artist:  </td>
                            <td>{`${artist.firstName} ${artist.lastName}`}</td>
                        </tr>
                        <tr>
                            <td>Year of Work: </td>
                            <td>{painting.yearOfWork}</td>
                        </tr>
                        <tr>
                            <td>Medium: </td>
                            <td>{painting.medium}</td>
                        </tr>
                        <tr>
                            <td>Size: </td>
                            <td>{`${painting.width} x ${painting.height}`}</td>
                        </tr>
                        <tr>
                            <td>Location: </td>
                            <td>{`${gallery.galleryName}, ${gallery.galleryCity}`}</td>
                        </tr>
                        <tr>
                            <td>Copyright: </td>
                            <td>{painting.copyrightText}</td>
                        </tr>
                    </tbody>
                </table>
                <span className='text-center'><a href={painting.museumLink}>Website</a></span>
                {painting.wikiLink&&<span><a href={painting.wikiLink}>Wiki</a></span>}
                <span className='text-center'>{painting.description}</span>

                <div className='flex flex-col h-full justify-end'>
                    <h3>Dominant Colours</h3>
                    <div className='flex'>
                        {colourArray.map(j=><ColourBox name={j.name} key={j.web} color={j.web}/>)}
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default PaintingCard