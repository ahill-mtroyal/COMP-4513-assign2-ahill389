import { useState, useEffect, createContext } from 'react'
import './App.css'
import getAllData from './modules/data'
import Toolbar from './components/toolbar'
import Gallery from './components/gallery/Gallery'
import Artists from './components/artists/Artists'
import Genres from './components/genres/Genres'
import Paintings from './components/paintings/Paintings'
import Login from './Login'
import Spinner from './modules/Spinner'

export const Context = createContext([]);

function App() {
  const [artists, setArtists] = useState(null)
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [artistsFavourites, setArtistsFavourites] = useState([])
  const [galleries, setGalleries] = useState(null)
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [galleryFavourites, setGalleryFavourites] = useState([])
  const [genres, setGenres] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [genresFavourites, setGenresFavourites] = useState([])
  const [paintings, setPaintings] = useState(null)
  const [paintingGenres, setPaintingGenres] = useState([])
  const [selectedPaintings, setSelectedPaintings] = useState([])
  const [selectedPainting, setSelectedPainting] = useState([])
  const [paintingFavourites, setPaintingFavourites] = useState([])
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const [pageView,setPageView] = useState('Galleries')
  const [modal,setModal] = useState(null)
  

  //1 big context object because I'm lazy
  const contextObj = {
    artists:[artists, setArtists],
    selectedArtist:[selectedArtist, setSelectedArtist],
    artistsFavourites:[artistsFavourites, setArtistsFavourites],
    galleries:[galleries, setGalleries],
    selectedGallery: [selectedGallery, setSelectedGallery],
    galleryFavourites: [galleryFavourites, setGalleryFavourites],
    genres:[genres, setGenres],
    selectedGenre:[selectedGenre, setSelectedGenre],
    genresFavourites:[genresFavourites, setGenresFavourites],
    paintings:[paintings, setPaintings],
    paintingGenres:[paintingGenres, setPaintingGenres],
    selectedPaintings:[selectedPaintings, setSelectedPaintings],
    selectedPainting:[selectedPainting, setSelectedPainting],
    paintingFavourites:[paintingFavourites, setPaintingFavourites],
    loading:[loading, setLoading],
    loggedIn:[loggedIn,setLoggedIn],
    pageView:[pageView,setPageView],
    modal:[modal,setModal]
  }

  //data fetching
  localStorage.clear(); //testing
  useEffect(()=>{
    //check logged in
    if (loggedIn){
      //get all data, passing all setters labeled in an obj, and data loading setter
      getAllData({artists:setArtists,
        galleries:setGalleries,
        genres:setGenres,
        paintings:setPaintings,
        paintingGenres:setPaintingGenres,
        loading:setLoading})
    }
  }, [loggedIn]);

  //loading spinner - updates loading state once all data is received.
  useEffect(()=>{
    if (artists&&galleries&&genres&&paintings){
      // setLoading(false)
      console.log('data loaded')
    }
  },[artists,galleries,genres,paintings])

  return(
    <main className="grid grid-cols-1 grid-rows-2 gap-4 h-9/10 w-4/5 text-white">
    <Context.Provider value={contextObj}>
      {modal&&modal}
      {!(loggedIn) && <Login />}
      {loggedIn&& <Toolbar />}
      {loggedIn&&pageView==="Artists"&&!loading&& <Artists />}
      {loggedIn&&pageView==="Paintings"&&!loading&& <Paintings />}
      {loggedIn&&pageView==="Galleries"&&!loading&& <Gallery />}
      {loggedIn&&pageView==="Genres"&&!loading&& <Genres />}
      {loading&&loggedIn&&<Spinner />}
    </Context.Provider>
    </main>
  )

}

export default App
