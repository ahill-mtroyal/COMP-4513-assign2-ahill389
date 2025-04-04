import { useState, useEffect } from 'react'
import Toolbar from './components/toolbar'
import './App.css'
import getAllData from './modules/data'

function App() {
  const [artists, setArtists] = useState([])
  const [galleries, setGalleries] = useState([])
  const [genres, setGenres] = useState([])
  const [paintings, setPaintings] = useState([])
  const [oading, setLoading] = useState(false)

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
      <Toolbar />
    </main>
  )

}

export default App
