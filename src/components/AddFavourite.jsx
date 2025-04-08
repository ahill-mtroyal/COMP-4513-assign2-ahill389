import Button from "./Button"
import { useContext } from "react"
import { Context } from "../App"

const AddFavourite = (props)=>{

    const favourited = props.favourited

    const icon = <img src={favourited?'COMP-4513-assign2-ahill389/icons/favouriteIconSelected.png':'COMP-4513-assign2-ahill389/icons/favouriteIcon.png'} className='icon' alt='favourite'/>

    return (
        <Button buttonData={{
            text: icon,
            handler: props.handler,
            className: 'btn btn-favourite',
            id: props.id
        }}/>
    )
}

export default AddFavourite