import Button from "./Button"
const AddFavourite = (props)=>{
    return (
        <Button buttonData={{
            text: 'Add To Favourites',
            handler: props.handler,
            className: 'btn btn-add-favourite'
        }}/>
    )
}

export default AddFavourite