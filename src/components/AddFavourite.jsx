import Button from "./Button"
import { useContext } from "react"
import { Context } from "../App"

const AddFavourite = (props)=>{

    const favourited = props.favourited

    const icon = <img src={favourited?'/icons/favouriteIconSelected.png':'/icons/favouriteIcon.png'} className='icon' alt='favourite'/>

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