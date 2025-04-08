import Button from "./Button"
import { useContext } from "react"
import { Context } from "../App"

const AddFavourite = (props)=>{

    const favourited = props.favourited

    const icon = <img src={favourited?'https://ahill-mtroyal.github.io/COMP-4513-assign2-ahill389/icons/favouriteIconSelected.png':'https://ahill-mtroyal.github.io/COMP-4513-assign2-ahill389/icons/favouriteIcon.png'} className='size-10' alt='favourite'/>

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