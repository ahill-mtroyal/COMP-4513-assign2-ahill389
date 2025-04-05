import { useContext } from "react"
import { Context } from "../../App"
import PaintingThumb from "./PaintingThumb"

const PaintingList = (props)=>{
    const [selectedPaintings, setSelectedPaintings] = useContext(Context).selectedPaintings
    const listItems = selectedPaintings.map(p=>
        <li key={p.paintingId}>
            <PaintingThumb painting={p}/>
        </li>
    )

    return(
        <div className='painting-list'>
            <h2>Paintings</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )

}

export default PaintingList