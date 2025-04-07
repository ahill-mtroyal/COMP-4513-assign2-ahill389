import { useState, useEffect, createContext } from 'react'
import './App.css'
import getAllData from './modules/data'
import Toolbar from './components/toolbar'
import Gallery from './components/gallery/Gallery'
import Artists from './components/artists/Artists'
import Genres from './components/genres/Genres'
import Paintings from './components/paintings/Paintings'
import Login from './Login'

export const Context = createContext([]);

function App() {
  const [artists, setArtists] = useState([])
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [artistsFavourites, setArtistsFavourites] = useState([])
  const [galleries, setGalleries] = useState([])
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [galleryFavourites, setGalleryFavourites] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [genresFavourites, setGenresFavourites] = useState([])
  const [paintings, setPaintings] = useState([])
  const [paintingGenres, setPaintingGenres] = useState([])
  const [selectedPaintings, setSelectedPaintings] = useState([])
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [pageView,setPageView] = useState('Galleries')
  

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
    loading:[loading, setLoading],
    loggedIn:[loggedIn,setLoggedIn],
    pageView:[pageView,setPageView]
  }

  //data fetching
  localStorage.clear(); //testing
  useEffect(()=>{
    //get all data, passing all setters labeled in an obj, and data loading setter
    getAllData({artists:setArtists,
      galleries:setGalleries,
      genres:setGenres,
      paintings:setPaintings,
      paintingGenres:setPaintingGenres,
      loading:setLoading})
  }, []);

  return(
    <main>
    <Context.Provider value={contextObj}>
      {!(loggedIn) && <Login />}
      {loggedIn && <Toolbar />}
      {loggedIn&&pageView==="Artists" && <Artists />}
      {loggedIn&&pageView==="Paintings" && <Paintings />}
      {loggedIn&&pageView==="Galleries" && <Gallery />}
      {loggedIn&&pageView==="Genres" && <Genres />}
    </Context.Provider>
    </main>
  )

}

export default App
