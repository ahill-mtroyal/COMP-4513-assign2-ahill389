import Button from "../Button"
import { Context } from "../../App";
import { useContext } from "react";

const Modal = (props)=>{
    const [modal,setModal] = useContext(Context).modal

    const closeModal = ()=>{
        setModal(null)
    }
    return(
        <div className='fixed z-10000 w-full h-full bg-neutral-600/80'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 text-black rounded-xl min-w-200'>
                <Button buttonData={{
                    text: <img src={'http://localhost:5173/COMP-4513-assign2-ahill389/icons/x.png'}/>,
                    handler:closeModal,
                    classNames:"absolute size-10 top-0 right-0 "
                }}/>
                {<props.content />}
            </div>
        </div>
    )
}

export default Modal