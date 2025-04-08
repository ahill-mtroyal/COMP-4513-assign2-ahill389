import Button from "../Button"
import { Context } from "../../App";
import { useContext } from "react";

const Modal = (props)=>{
    const [modal,setModal] = useContext(Context).modal

    const closeModal = ()=>{
        setModal(null)
    }
    return(
        <div className='modal-background'>
            <div className='modal'>
                <Button buttonData={{
                    text: <img src={'http://localhost:5173/COMP-4513-assign2-ahill389/icons/x.png'}/>,
                    handler:closeModal
                }}/>
                {<props.content />}
            </div>
        </div>
    )
}

export default Modal