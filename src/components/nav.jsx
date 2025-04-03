import Button from './button'
const Nav = (props)=>{
    //Data for respective buttons
    function ButtonData(text, handler, classNames){
        this.text = text;
        this.handler = handler;
        this.classNames = `btn ${classNames}`;
    }

    //placeholder handler function
    const placeHolder = e=>{
        console.log(`${e.target.textContent} was clicked`)
    }

    const artists = new ButtonData('Artists',placeHolder,'btn-nav')
    const paintings = new ButtonData('Paintings',placeHolder,'btn-nav')
    const galleries = new ButtonData('Galleries',placeHolder,'btn-nav')
    const genres = new ButtonData('Genres',placeHolder,'btn-nav')
    const favourites = new ButtonData('Favourites',placeHolder,'btn-nav')
    const about = new ButtonData('About',placeHolder,'btn-nav')

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