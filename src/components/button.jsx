const Button = (props)=>{
    const buttonData = props.buttonData

    return (

        <button className={"bg-black text-neutral-300 hover:text-white p-1 m-0 rounded-md transition delay-10"+buttonData.classNames} value={buttonData.id} onClick={buttonData.handler}>
            {buttonData.text}
        </button>

    )
}

export default Button