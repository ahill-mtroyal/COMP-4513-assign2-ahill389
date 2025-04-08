import Button from './Button'
import { useContext } from 'react'
import { Context } from '../App'
import ModalFavourites from './modals/ModalFavourites'

const Nav = (props)=>{
    const [pageView,setPageView] = useContext(Context).pageView
    const [modal,setModal] = useContext(Context).modal
    const [artistsFavourites, setArtistsFavourites] = useContext(Context).artistsFavourites
    const [galleryFavourites, setGalleryFavourites] = useContext(Context).galleryFavourites
    const [genresFavourites, setGenresFavourites] = useContext(Context).genresFavourites
    const [paintingFavourites, setPaintingFavourites] = useContext(Context).paintingFavourites

    const disabled = !(artistsFavourites.length>0||galleryFavourites.length>0||genresFavourites.length>0||paintingFavourites.length>0)

    //Data for respective buttons
    function ButtonData(text, handler, classNames){
        this.text = text;
        this.handler = handler;
        this.classNames = `btn ${classNames}`
        this.id = text
    }

    //placeholder handler function
    const swapView = e=>{
        setPageView(e.target.value)
    }

    const favouriteModal = e=>{
        setModal(<ModalFavourites />)
    }

    const artists = new ButtonData('Artists',swapView,'m-0.25 w-20 h-10')
    const paintings = new ButtonData('Paintings',swapView,'m-0.25 w-20 h-10')
    const galleries = new ButtonData('Galleries',swapView,'m-0.25 w-20 h-10')
    const genres = new ButtonData('Genres',swapView,'m-0.25 w-20 h-10')
    // const favourites = new ButtonData('Favourites',favouriteModal,'btn-nav')
    // const about = new ButtonData('About',swapView,'btn-nav')

    return(
        <nav className=''>
            <Button buttonData={artists}/>
            <Button buttonData={paintings}/>
            <Button buttonData={galleries}/>
            <Button buttonData={genres}/>
            <button className='bg-black text-neutral-300 hover:text-white p-1 m-0.25 rounded-md transition delay-10 w-25 h-10  disabled:bg-neutral-500' onClick={favouriteModal} disabled={disabled}>
                {'Favourites'}
            </button>
            {/* <Button buttonData={about}/> */}
        </nav>
    )
}

export default Nav