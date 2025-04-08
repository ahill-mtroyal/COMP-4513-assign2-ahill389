//requires an onClick handler for the header, the header text, and an array of list items passed as props
const ReversibleList = (props)=>{
    return(
        <div className='reversible-list'>
            <h3 onClick={props.handler}>{props.header}</h3>
            <ul>
                {props.listItems.length > 0?props.listItems:<span className='no-items'>Nothing Here!</span>}
            </ul>
        </div>
    )
}

export default ReversibleList