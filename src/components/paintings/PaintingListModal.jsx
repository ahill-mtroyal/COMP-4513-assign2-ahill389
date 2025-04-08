import { useContext } from "react"
import { Context } from "../../App"
import PaintingThumb from "./PaintingThumb"
import Button from "../Button"

const PaintingListModal = (props)=>{
    const [paintingFavourites, setPaintingFavourites] = useContext(Context).paintingFavourites
    const icon = <img src='COMP-4513-assign2-ahill389/icons/x.png' style={{width:'16px',height:'16px'}} className='icon-small' alt='remove'/>
    const listItems = paintingFavourites.map(p=>
        <li key={p.paintingId}>
            <Button buttonData={{
                classNames:'btn btn-remove',
                id:p.paintingId,
                handler:props.remove,
                text:icon
            }}/>
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

export default PaintingListModal