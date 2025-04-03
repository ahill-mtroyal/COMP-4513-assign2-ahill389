const Button = (props)=>{
    const buttonData = props.buttonData

    return (

        <button className="btn btn-nav" onClick={buttonData.handler}>
            {buttonData.text}
        </button>

    )
}

export default Button