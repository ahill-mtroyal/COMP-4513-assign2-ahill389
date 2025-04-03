const Button = (props)=>{
    const buttonData = props.buttonData

    return (

        <button className={buttonData.classNames} onClick={buttonData.handler}>
            {buttonData.text}
        </button>

    )
}

export default Button