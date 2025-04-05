import { useState, useEffect, createContext } from 'react'
import './App.css'
import getAllData from './modules/data'
import Toolbar from './components/toolbar'
import Gallery from './components/gallery/Gallery'
import Artists from './components/artists/Artists'

export const Context = createContext([]);

function App() {
  const [artists, setArtists] = useState([])
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [artistsFavourites, setArtistsFavourites] = useState([])
  const [galleries, setGalleries] = useState([])
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [galleryFavourites, setGalleryFavourites] = useState([])
  const [genres, setGenres] = useState([])
  const [paintings, setPaintings] = useState([])
  const [selectedPaintings, setSelectedPaintings] = useState([])
  const [loading, setLoading] = useState(false)

  //1 big context object because i'm lazy
  const contextObj = {
    artists:[artists, setArtists],
    selectedArtist:[selectedArtist, setSelectedArtist],
    artistsFavourites:[artistsFavourites, setArtistsFavourites],
    galleries:[galleries, setGalleries],
    selectedGallery: [selectedGallery, setSelectedGallery],
    galleryFavourites: [galleryFavourites, setGalleryFavourites],
    genres:[genres, setGenres],
    paintings:[paintings, setPaintings],
    selectedPaintings:[selectedPaintings, setSelectedPaintings],
    loading:[loading, setLoading]
  }

  //data fetching
  localStorage.clear(); //testing
  useEffect(()=>{
    //get all data, passing all setters labeled in an obj, and data loading setter
    getAllData({artists:setArtists,
      galleries:setGalleries,
      genres:setGenres,
      paintings:setPaintings,
      loading:setLoading})
  }, []);

  return(
    <main>
    <Context.Provider value={contextObj}>
      <Toolbar />
      <Artists />
    </Context.Provider>
    </main>
  )

}

export default App
