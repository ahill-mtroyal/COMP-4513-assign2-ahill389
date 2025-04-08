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
        <div className='painting-card'>
            <img className='' src={`COMP-4513-assign2-ahill389/paintings/full/${painting.imageFileName}.jpg`} alt={painting.title}/>
            <AddFavourite handler={addToFavourites} favourited={favourited} id={painting.paintingId}/>
            <div>
                <strong>{painting.title}</strong>
                Artist: {`${artist.firstName} ${artist.lastName}`}<br/><br/>
                <table>
                    <tbody>
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
                <span><a href={painting.museumLink}>Website</a></span>
                {painting.wikiLink&&<span><a href={painting.wikiLink}>Wiki</a></span>}
                <span>{painting.copyrightText}</span><br/>
                <span>{painting.description}</span>

                <div className='dominant-colours'>
                    <h3>Dominant Colours</h3>
                    {colourArray.map(j=><ColourBox name={j.name} key={j.web} color={j.web}/>)}
                </div>
            </div>            
        </div>
    )
}

export default PaintingCard