import { useState, useContext, useEffect } from "react"
import { Context } from "../../App";
import Button from "../Button"

const PaintingFilters = (props)=>{
    //form states
    const [radioState,setRadioState] = useState("titleRadio")
    const [titleState,setTitleState] = useState("")
    const [artistState,setArtistState] = useState("")
    const [galleryState,setGalleryState] = useState("")
    // const [genreState,setGenreState] = useState("")
    const [yearLowState,setYearLowState] = useState("")
    const [yearHighState,setYearHighState] = useState("")

    //data contexts
    const [paintings, setPaintings] = useContext(Context).paintings
    const [selectedPaintings, setSelectedPaintings] = useContext(Context).selectedPaintings
    const [artists, setArtists] = useContext(Context).artists
    const [galleries, setGalleries] = useContext(Context).galleries
    // const [genres, setGenres] = useContext(Context).genres
    // const [paintingGenres, setPaintingGenres] = useContext(Context).paintingGenres


    //used while fitler paintings
    let newPaintings = null

    const radioChange = e=>{setRadioState(e.target.value)}
    const onClear = e=>{
        setTitleState("")
        setArtistState("")
        setGalleryState("")
        setYearLowState("")
        setYearHighState("")
        setRadioState('titleRadio')
        setSelectedPaintings(paintings)
    }

    const onFilter = ()=>{
        switch (radioState){
            case 'titleRadio':
                //filter by title
                newPaintings = paintings.filter(p=>(p.title.toLowerCase().includes(titleState.toLowerCase())))
                setSelectedPaintings(newPaintings)
                break;
            case 'artistRadio':
                //filter by artist
                //get artists by artist state string
                const newArtists = artists.filter(a=>`${a.firstName} ${a.lastName}`.toLowerCase().includes(artistState.toLowerCase()))
                const artistIds = []
                newArtists.forEach(a=>{artistIds.push(a.artistId)})
                newPaintings = paintings.filter(p=>artistIds.includes(p.artistId))
                setSelectedPaintings(newPaintings)
                break;
            case 'galleryRadio':
                //filter by gallery
                //get galleries by gallery state string
                const newGalleries = galleries.filter(g=>g.galleryName.toLowerCase().includes(galleryState.toLowerCase()))
                const galleryIds = []
                newGalleries.forEach(g=>{galleryIds.push(g.galleryId)})
                newPaintings = paintings.filter(p=>galleryIds.includes(p.galleryId))
                setSelectedPaintings(newPaintings)
                break;
            // case 'genreRadio':
                
            //     break;
            case 'yearRadio':
                //filter by year
                let low = yearLowState?yearLowState:0
                let high = yearHighState?yearHighState:10000
                //check input in numbers
                if (isNaN(low) || isNaN(high)){
                    alert(`Year filter should only contain numbers. Clearing non-number inputs.`)
                    if(isNaN(low)){low=0;setYearLowState("")}
                    if(isNaN(high)){high=10000;setYearHighState("")}
                }
                newPaintings = paintings.filter(p=>p.yearOfWork>=low&&p.yearOfWork<=high)
                setSelectedPaintings(newPaintings)
                break;
            default:
                setSelectedPaintings(paintings)
                
        }
    }

    //set painting list to default (all paintings)
    useEffect(()=>{
        newPaintings = paintings.sort((a,b)=>{
            if (a.title > b.title) {return 1}
            else if (a.title < b.title) {return -1}
            else {return 0}
        })
        setSelectedPaintings(newPaintings)
    },[])

    //this should probably have been made with more sub-components - but its already here now
    return (
        <div className='painting-filters-form'>
            <h2>Painting Filters</h2>
            {/* // title, artist, gallery, year (range) clear + filter button */}
            <form onSubmit={(e)=>{e.preventDefault()}}>

                <div className='form-radio-option title-filter'>
                    <label className='radio'>
                        <input type='radio' name='painting-filter' value='titleRadio' onChange={radioChange} checked={radioState==="titleRadio"}></input>
                        <span>Title</span>
                    </label>
                    <input type='text' name='title' disabled={!(radioState==='titleRadio')? true:false} onChange={e=>{setTitleState(e.target.value)}} value={!(radioState==='titleRadio')?"":titleState}></input>
                    <br/>
                </div>

                <div className='form-radio-option artist-filter'>
                    <label className='radio'>
                        <input type='radio' name='painting-filter' value='artistRadio' onChange={radioChange} checked={radioState==="artistRadio"}></input>
                        <span>Artist</span>
                    </label>
                    <input type='text' name='artist' disabled={!(radioState==='artistRadio')? true:false} onChange={e=>{setArtistState(e.target.value)}} value={!(radioState==='artistRadio')?"":artistState}></input>
                    <br/>
                </div>

                <div className='form-radio-option gallery-filter'>
                    <label className='radio'>
                        <input type='radio' name='painting-filter' value='galleryRadio' onChange={radioChange} checked={radioState==="galleryRadio"}></input>
                        <span>Gallery</span>
                    </label>
                    <input type='text' name='gallery' disabled={!(radioState==='galleryRadio')? true:false} onChange={e=>{setGalleryState(e.target.value)}} value={!(radioState==='galleryRadio')?"":galleryState}></input>
                    <br/>
                </div>

                {/* <div className='form-radio-option genre-filter'>
                    <label className='radio'>
                        <input type='radio' name='painting-filter' value='genreRadio' onChange={radioChange} checked={radioState==="genreRadio"}></input>
                        <span>Genre</span>
                    </label>
                    <input type='text' name='genre' disabled={!(radioState==='genreRadio')? true:false} onChange={e=>{setGenreState(e.target.value)}} value={!(radioState==='genreRadio')?"":genreState}></input>
                    <br/>
                </div> */}

                <div className='form-radio-option year-filter'>
                    <label className='radio'>
                        <input type='radio' name='painting-filter' value='yearRadio' onChange={radioChange} checked={radioState==="yearRadio"}></input>
                        <span>Year</span>
                    </label>
                    <input type='text' name='yearLow' disabled={!(radioState==='yearRadio')? true:false} onChange={e=>{setYearLowState(e.target.value)}} value={!(radioState==='yearRadio')?"":yearLowState}></input>
                     - 
                    <input type='text' name='yearHigh' disabled={!(radioState==='yearRadio')? true:false} onChange={e=>{setYearHighState(e.target.value)}} value={!(radioState==='yearRadio')?"":yearHighState}></input>
                    <br/>
                </div>

                <Button buttonData={{
                    classNames:'btn btn-submit-filter',
                    id: '',
                    handler: onFilter,
                    text: 'Filter'
                }}/>
                <Button buttonData={{
                    classNames:'btn btn-clear-form',
                    id: '',
                    handler: onClear,
                    text: 'Clear'
                }}/>
                
            </form>
        </div>
    )
}

export default PaintingFilters