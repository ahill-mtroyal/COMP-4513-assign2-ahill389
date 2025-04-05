import { createClient } from "@supabase/supabase-js"

//NEED TO BE PUT INTO ENV VARIABLES
const supaUrl = 'https://ajyrcmphdwzxigpkrkth.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqeXJjbXBoZHd6eGlncGtya3RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwOTIyNDgsImV4cCI6MjA1NTY2ODI0OH0.lVH3PuXDObLiNT2-u73My5I4y_COMPRHX1gvlGPmKLY';

const db = createClient(supaUrl, supaAnonKey);

async function getAllData(setters){
    setters.loading(true)
    console.log(`data loading`)
    getArtists(setters.artists)
    getGalleries(setters.galleries,setters.loading)
    getGenres(setters.genres)
    getPaintings(setters.paintings)
    getPaintingGenres(setters.paintingGenres)
    console.log(`data loaded`)
    setters.loading(false)
}

//fetch functions - if data not in local storage
async function fetchArtists(setter) {
    const { data } = await db.from("artists").select('*');
    setter(data);
    localStorage.artists = data
  }

//galleries includes loading state setter, as is the first screen shown on the app
async function fetchGalleries(setter,loading) {
    loading(true)
    const { data } = await db.from("galleries").select('*');
    setter(data);
    loading(false)
    localStorage.Galleries = data
  }

async function fetchPaintings(setter) {
    const { data } = await db.from("paintings").select('*');
    setter(data);
    localStorage.paintings = data
  }

async function fetchGenres(setter) {
    const { data } = await db.from("genres").select('*');
    setter(data);
    localStorage.paintings = data
  }

  async function fetchPaintingGenres(setter) {
    const { data } = await db.from("paintingGenres").select('*');
    setter(data);
    localStorage.paintingGenres = data
  }

//get functions - checks local storage first, otherwise calls fetch function
function getArtists(setter){
    if (localStorage.artists){
        setter(localStorage.artists)
    } else {
        fetchArtists(setter)
    }
}

//includes loading setter as is first screen seen on the app
function getGalleries(setter,loading){
    if (localStorage.galleries){
        setter(localStorage.galleries)
    } else {
        fetchGalleries(setter,loading)
    }
}

function getPaintings(setter){
    if (localStorage.paintings){
        setter(localStorage.paintings)
    } else {
        fetchPaintings(setter)
    }
}

function getGenres(setter){
    if (localStorage.genres){
        setter(localStorage.genres)
    } else {
        fetchGenres(setter)
    }
}

function getPaintingGenres(setter){
    if (localStorage.paintingGenres){
        setter(localStorage.paintingGenres)
    } else {
        fetchPaintingGenres(setter)
    }
}

export default getAllData;