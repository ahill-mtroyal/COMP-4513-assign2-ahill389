import { useContext } from "react"
import { Context } from "../../App"
import PaintingThumb from "./PaintingThumb"
import Button from "../Button"

const PaintingListModal = (props)=>{
    const [paintingFavourites, setPaintingFavourites] = useContext(Context).paintingFavourites
    const icon = <img src='COMP-4513-assign2-ahill389/icons/x.png' style={{width:'16px',height:'16px'}} className='icon-small' alt='remove'/>
    const listItems = paintingFavourites.map(p=>
        <li className="relative" key={p.paintingId}>
            <Button buttonData={{
                classNames:'absolute top-1 right-5',
                id:p.paintingId,
                handler:props.remove,
                text:icon
            }}/>
            <PaintingThumb painting={p}/>
        </li>
    )

    return(
        <div className='flex flex-col p-2 items-center overflow-y-auto min-w-50 text-center'>
            <h3 className='font-bold'>Paintings</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    )

}

export default PaintingListModal