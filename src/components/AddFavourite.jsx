import Button from "./Button"
import { useContext } from "react"
import { Context } from "../App"

const AddFavourite = (props)=>{

    const favourited = props.favourited

    const icon = <img src={favourited?'/icons/favouriteIconSelected.png':'/icons/favouriteIcon.png'} className='size-10' alt='favourite'/>

    return (
        <Button buttonData={{
            text: icon,
            handler: props.handler,
            classNames: 'absolute top-5 right-5',
            id: props.id
        }}/>
    )
}

export default AddFavourite