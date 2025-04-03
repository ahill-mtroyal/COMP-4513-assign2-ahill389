import Nav from "./nav";

//toolbar components, meant to be at the top of the page.
//contains a logo, title header, then nav buttons
const Toolbar = (props)=>{

    return(
        <div className="toolbar">
            <img src={null} alt="logo-img" className="logo"/>
            <header>Comp 4513 Assignment 2</header>
            <Nav/>
        </div>
    )

}

export default Toolbar