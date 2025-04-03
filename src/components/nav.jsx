import Button from './button'
const Nav = (props)=>{
    //Data for respective buttons
    function ButtonData(text, handler){
        this.text = text;
        this.handler = handler;
    }

    //placeholder handler function
    const placeHolder = e=>{
        console.log(`${e.target.textContent} was clicked`)
    }

    const artists = new ButtonData('Artists',placeHolder)
    const paintings = new ButtonData('Paintings',placeHolder)
    const galleries = new ButtonData('Galleries',placeHolder)
    const genres = new ButtonData('Genres',placeHolder)
    const favourites = new ButtonData('Favourites',placeHolder)
    const about = new ButtonData('About',placeHolder)

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