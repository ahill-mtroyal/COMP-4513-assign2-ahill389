const ColourBox = (props)=>{    
    return(
        <div className='colour-box' title={props.name} style={{
                width:'40px',
                height:'40px',
                backgroundColor: props.color
            }}>
        </div>
    )

}

export default ColourBox