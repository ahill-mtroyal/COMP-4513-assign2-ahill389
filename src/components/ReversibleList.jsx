//requires an onClick handler for the header, the header text, and an array of list items passed as props
const ReversibleList = (props)=>{
    return(
        <div className='flex flex-col p-2 items-center overflow-y-auto min-w-50 text-center'>
            <h3 onClick={props.handler} className="font-bold">{props.header}</h3>
            <ul className="w-1/1 space-y-0.5">
                {props.listItems.length > 0?props.listItems:<span className=''>Nothing Here!</span>}
            </ul>
        </div>
    )
}

export default ReversibleList