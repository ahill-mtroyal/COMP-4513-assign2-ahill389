import Modal from "./Modal"
import PaintingCard from "../paintings/PaintingCard"
import { useContext } from "react"
import { Context } from "../../App"

const ModalPainting = (props)=>{
    const [selectedPainting, setSelectedPainting] = useContext(Context).selectedPainting
    const painting = selectedPainting
    const content = ()=>{
        return(
            <div className='h-full w-full'>
                <PaintingCard />
            </div>
        )
    }

    return(
        <Modal content={content}/>
    )
}

export default ModalPainting