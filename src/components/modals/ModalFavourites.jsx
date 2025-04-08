import ReversibleList from "../reversibleList";
import { useContext,useEffect } from "react";
import { Context } from "../../App";
import Modal from "./Modal";
import Button from "../Button";
import PaintingListModal from "../paintings/PaintingListModal";

const ModalFavourites = (props)=>{
    const [artistsFavourites, setArtistsFavourites] = useContext(Context).artistsFavourites
    const [galleryFavourites, setGalleryFavourites] = useContext(Context).galleryFavourites
    const [genresFavourites, setGenresFavourites] = useContext(Context).genresFavourites
    const [paintingFavourites, setPaintingFavourites] = useContext(Context).paintingFavourites
    const [pageView,setPageView] = useContext(Context).pageView
    const [modal,setModal] = useContext(Context).modal
    const [selectedArtist, setSelectedArtist] = useContext(Context).selectedArtist
    const [selectedGallery, setSelectedGallery] = useContext(Context).selectedGallery
    const [selectedGenre, setSelectedGenre] = useContext(Context).selectedGenre
    const [selectedPaintings, setSelectedPaintings] = useContext(Context).selectedPaintings

    //sort lists on open & 
    useEffect(()=>{
        setArtistsFavourites(
            [...artistsFavourites].sort((a,b)=>{
                if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {return 1}
                else if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {return -1}
                else if (a.firstName > b.firstName) {return 1}
                else if (a.firstName < b.firstName) {return -1}
                else {return 0}
            })
        )
        setGalleryFavourites(
            [...galleryFavourites].sort((a,b)=>{
                if (a.galleryName > b.galleryName) {return 1}
                else if (a.galleryName < b.galleryName) {return -1}
                else {return 0}
            })
        )
        setGenresFavourites(
            [...genresFavourites].sort((a,b)=>{
                if (a.genreName > b.genreName) {return 1}
                else if (a.genreName < b.genreName) {return -1}
                else {return 0}
            })
        )
        setPaintingFavourites(
            [...paintingFavourites].sort((a,b)=>{
                if (a.yearOfWork > b.yearOfWork) {return 1}
                else if (a.yearOfWork < b.yearOfWork) {return -1}
                else {return 0}
            })
        )
    },[])

    //list reversers
    const reverseArtists = ()=>{
        const reversedArtists = [...artistsFavourites].reverse()
        setArtistsFavourites(reversedArtists)
    }

    const reverseGallery = ()=>{
        const reversedGallery = [...galleryFavourites].reverse()
        setGalleryFavourites(reversedGallery)
    }

    const reverseGenre = ()=>{
        const reversedGenre = [...genresFavourites].reverse()
        setGenresFavourites(reversedGenre)
    }

    const paintingReverse = ()=>{
        const reversedPainting = [...paintingFavourites].reverse()
        setPaintingFavourites(reversedPainting)
    }

    //favourite remover handlers
    const removeFavouriteArtist = e=>{
        const id = e.currentTarget.value
        const newFavourites = [...artistsFavourites].filter(a=>a.artistId!=id)
        setArtistsFavourites(newFavourites)
    }

    const removeFavouriteGallery = e=>{
        const id = e.currentTarget.value
        const newFavourites = [...galleryFavourites].filter(g=>g.galleryId!=id)
        setGalleryFavourites(newFavourites)
    }

    const removeFavouriteGenre = e=>{
        const id = e.currentTarget.value
        const newFavourites = [...genresFavourites].filter(g=>g.genreId!=id)
        setGenresFavourites(newFavourites)
    }

    const removeFavouritePainting = e=>{
        console.log(`Removing ${e.currentTarget.value}`)
        const id = e.currentTarget.value
        const newFavourites = [...paintingFavourites].filter(p=>p.paintingId!=id)
        setPaintingFavourites(newFavourites)
    }

    //view changers
    const artistView = e=>{
        const id = e.target.value
        setSelectedArtist(artistsFavourites.find(a=>{a.artistId==id}))
        setPageView('Artists')
        setModal(null)
    }
    const galleryView = e=>{
        const id = e.target.value
        setSelectedGallery(galleryFavourites.find(g=>{g.galleryId==id}))
        setPageView('Galleries')
        setModal(null)
    }
    const genreView = e=>{
        const id = e.target.value
        setSelectedGenre(genresFavourites.find(g=>{g.genreId==id}))
        setPageView('Genres')
        setModal(null)
    }

    //for remove buttons
    const icon = <img src='/icons/x.png' style={{width:'16px',height:'16px'}} className='icon-small' alt='remove'/>

    //list items
    const artistItems = artistsFavourites.map(i=>
        <li className='relative' key={i.artistId}>
        <Button buttonData={{
            classNames:'w-5/6 max-w-full flex justify-center',
            id:i.artistId,
            handler:artistView,
            text:`${i.firstName} ${i.lastName}`
        }
        }/>
        <Button buttonData={{
            classNames:'absolute right-1 bottom-1',
            id:i.artistId,
            handler:removeFavouriteArtist,
            text:icon
        }}/>
        </li>
    )
    const galleryItems = galleryFavourites.map(i=>
        <li className='relative' key={i.galleryId}>
        <Button buttonData={{
            classNames:'w-5/6 max-w-full flex justify-center',
            id:i.galleryId,
            handler:galleryView,
            text:i.galleryName
        }
        }/>
        <Button buttonData={{
            classNames:'absolute right-1 bottom-1',
            id:i.galleryId,
            handler:removeFavouriteGallery,
            text:icon
        }}/>
        </li>
    )
    const genreItems = genresFavourites.map(i=>
        <li className='relative' key={i.genreId}>
        <Button buttonData={{
            classNames:'w-5/6 max-w-full flex justify-center',
            id:i.genreId,
            handler:genreView,
            text:i.genreName
        }
        }/>
        <Button buttonData={{
            classNames:'absolute right-1 bottom-1',
            id:i.genreId,
            handler:removeFavouriteGenre,
            text:icon
        }}/>
        </li>
    )

    const paintingItems = paintingFavourites.map(i=>
        <li className='relative' key={i.paintingId}>
        <Button buttonData={{
            classNames:'w-5/6 max-w-full flex justify-center',
            id:i.paintingId,
            text:i.title
        }
        }/>
        <Button buttonData={{
            classNames:'absolute right-1 bottom-1',
            id:i.paintingId,
            handler:removeFavouritePainting,
            text:icon
        }}/>
        </li>
    )
   
    const content = ()=>{
        return(
            <div className='flex flex-col min-w-200 h-1/1 bg-white rounded-xl'>
                <h2 className=" w-full h-20 text-center font-bold text-3xl mt-5 border-b-1 ">Favourites</h2><br/>
                <div className="row-start-2 grid grid-cols-4 h-1/1">
                    <div className="relative min-w-40 w-full">
                        <ReversibleList handler={reverseArtists} header={'Artists'} listItems={artistItems}/>
                    </div>
                    <div className="relative min-w-40 w-full h-full">
                        <ReversibleList handler={reverseGallery} header={'Galleries'} listItems={galleryItems}/>
                    </div>
                    <div className="relative min-w-40 w-full h-full">
                        <ReversibleList handler={reverseGenre} header={'Genres'} listItems={genreItems}/>
                    </div>
                    <div className="relative min-w-40 w-full h-full">
                        <ReversibleList handler={paintingReverse} header={'Paintings'} listItems={paintingItems}/>
                    </div>
                </div>
                
            </div>
        )
    }

    return(
        <Modal content={content}/>
    )
}

export default ModalFavourites