const PaintingThumb = (props)=>{
    const painting = props.painting

    const clickHandler = ()=>{
        console.log(`${painting.title} was selected.`)
    } 

    return(
        <img className='painting-thumb' src={`/paintings/square/${painting.imageFileName}.jpg`} alt={painting.title} onClick={clickHandler}
        style={{height:'100px', width:'100px'}}/>
    )
}

export default PaintingThumb