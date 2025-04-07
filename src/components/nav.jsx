import Button from './Button'
import { useContext } from 'react'
import { Context } from '../App'

const Nav = (props)=>{
    const [pageView,setPageView] = useContext(Context).pageView

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

    const artists = new ButtonData('Artists',swapView,'btn-nav')
    const paintings = new ButtonData('Paintings',swapView,'btn-nav')
    const galleries = new ButtonData('Galleries',swapView,'btn-nav')
    const genres = new ButtonData('Genres',swapView,'btn-nav')
    const favourites = new ButtonData('Favourites',swapView,'btn-nav')
    const about = new ButtonData('About',swapView,'btn-nav')

    return(
        <nav>
            <Button buttonData={artists}/>
            <Button buttonData={paintings}/>
            <Button buttonData={galleries}/>
            <Button buttonData={genres}/>
            <Button buttonData={favourites}/>
            <Button buttonData={about}/>
        </nav>
    )
}

export default Nav