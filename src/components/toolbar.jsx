import Nav from "./Nav";

//toolbar components, meant to be at the top of the page.
//contains a logo, title header, then nav buttons
const Toolbar = (props)=>{

    return(
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-wrap justify-around w-1/2">
            <header>Comp 4513 Assignment 2</header>
            <Nav/>
        </div>
    )

}

export default Toolbar