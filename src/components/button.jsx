const Button = (props)=>{
    const buttonData = props.buttonData

    return (

        <button className={buttonData.classNames} value={buttonData.id} onClick={buttonData.handler}>
            {buttonData.text}
        </button>

    )
}

export default Button