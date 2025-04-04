//Exported function - provides all endpoint responses
function handleQueries(app, db){
    returnEras(app,db);
    returnGalleries(app,db);
    returnGalleryRef(app,db);
    returnGalleryCountry(app,db);
    returnArtists(app,db);
    returnArtistRef(app,db);
    returnArtistsName(app,db);
    returnArtistsNationality(app,db);
    returnPaintings(app,db);
    returnPaintingsSort(app,db);
    returnPaintingRef(app,db);
    returnPaintingsTitle(app,db);
    returnPaintingsYears(app,db);
    returnPaintingsGallery(app,db);
    returnPaintingsArtist(app,db);
    returnPaintingsNationality(app,db);
    returnGenres(app,db);
    returnGenreRef(app,db);
    returnGenresPainting(app,db);
    returnPaintingsGenre(app,db);
    returnPaintingsEra(app,db);
    returnGenresCount(app,db);
    returnArtistsCount(app,db);
    returnTopGenres(app,db);    
}




//API Endpoints


// /api/eras Returns all the eras
function returnEras(app,db){
    app.get('/api/eras', async (req, res) => {
        const {data, error} = await db
        .from('eras')
        .select();
        res.send(data);
    })
}

// /api/galleries Returns all the galleries
function returnGalleries(app,db){
    app.get('/api/galleries', async (req, res) => {
        const {data, error} = await db
        .from('galleries')
        .select();
        res.send(data);
    })
}

// /api/galleries/ref Returns just the specified gallery - must be int
function returnGalleryRef(app,db){
    app.get('/api/galleries/:ref', async (req, res) => {
        const {data, error} = await db
        .from('galleries')
        .select()
        .eq('galleryId',req.params.ref);
        draftResponseInt(req,res,data);
    })
    
}

// /api/galleries/country/substring Returns the galleries whose galleryCountry (case insensitive) begins with the provided substring
function returnGalleryCountry(app,db){
    app.get('/api/galleries/country/:substring', async (req, res) => {
        const {data, error} = await db
        .from('galleries')
        .select()
        .ilike('galleryCountry',`${req.params.substring}%`);
        draftResponseString(req,res,data);
    })

}

// /api/artists Returns all the artists
function returnArtists(app,db){
    app.get('/api/artists', async (req, res) => {
        const {data, error} = await db
        .from('artists')
        .select();
        res.send(data);
    })    
    
}

// /api/artists/ref Returns just the specified artist
function returnArtistRef(app,db){
    app.get('/api/artists/:ref', async (req, res) => {
        const {data, error} = await db
        .from('artists')
        .select()
        .eq('artistId',req.params.ref);
        draftResponseInt(req,res,data);
    })
    
}

// /api/artists/search/substring Returns the artists whose last name (case insensitive) begins with the provided substring
function returnArtistsName(app,db){
    app.get('/api/artists/search/:substring', async (req, res) => {
        const {data, error} = await db
        .from('artists')
        .select()
        .ilike('lastName',`${req.params.substring}%`);
        draftResponseString(req,res,data);
    })
    
}

// /api/artists/country/substring Returns the artists whose nationality (case insensitive) begins with the provided substring
function returnArtistsNationality(app,db){
    app.get('/api/artists/country/:substring', async (req, res) => {
        const {data, error} = await db
        .from('artists')
        .select()
        .ilike('nationality',`${req.params.substring}%`);
        if (data.length < 1){
            res.send(notFound(req.params.substring))
        } else {
            res.send(data);
        }
    })
    
}

// /api/paintings Returns all the paintings
function returnPaintings(app,db){
    app.get('/api/paintings', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,
            artists (artistId,firstName,lastName,nationality,gender,yearOfBirth,yearOfDeath,details,artistLink),
            galleries(galleryId,galleryName,galleryNativeName,galleryCity,galleryAddress,galleryCountry,latitude,longitude,galleryWebSite,flickrPlaceId,yahooWoeId,googlePlaceId),
            imageFileName,
            title,
            shapeId,
            museumLink,
            accessionNumber,
            copyrightText,
            description,
            excerpt,
            yearOfWork,
            width,
            height,
            medium,
            cost,
            MSRP,
            googleLink,
            googleDescription,
            wikiLink,
            jsonAnnotations
            `)
        .order('title', { ascending: true});
        res.send(data);
    })
    
}

// /api/paintings/sort/title|year Returns all the paintings, sorted by either title or yearOfWork.
function returnPaintingsSort(app,db){
    app.get('/api/paintings/sort/:ref', async (req, res) => {
        if (req.params.ref == 'year'){
            const {data, error} = await db
            .from('paintings')
            .select(`
                paintingId,
                artists (artistId,firstName,lastName,nationality,gender,yearOfBirth,yearOfDeath,details,artistLink),
                galleries(galleryId,galleryName,galleryNativeName,galleryCity,galleryAddress,galleryCountry,latitude,longitude,galleryWebSite,flickrPlaceId,yahooWoeId,googlePlaceId),
                imageFileName,
                title,
                shapeId,
                museumLink,
                accessionNumber,
                copyrightText,
                description,
                excerpt,
                yearOfWork,
                width,
                height,
                medium,
                cost,
                MSRP,
                googleLink,
                googleDescription,
                wikiLink,
                jsonAnnotations
                `)
            .order('yearOfWork', { ascending: true});
            res.send(data);
        } else if (req.params.ref == 'title') {
            const {data, error} = await db
            .from('paintings')
            .select(`
                paintingId,
                artists (artistId,firstName,lastName,nationality,gender,yearOfBirth,yearOfDeath,details,artistLink),
                galleries(galleryId,galleryName,galleryNativeName,galleryCity,galleryAddress,galleryCountry,latitude,longitude,galleryWebSite,flickrPlaceId,yahooWoeId,googlePlaceId),
                imageFileName,
                title,
                shapeId,
                museumLink,
                accessionNumber,
                copyrightText,
                description,
                excerpt,
                yearOfWork,
                width,
                height,
                medium,
                cost,
                MSRP,
                googleLink,
                googleDescription,
                wikiLink,
                jsonAnnotations
                `)
            .order('title', { ascending: true});
            res.send(data);
        } else {
            res.send({Error: `This endpoint (/api/paintings/sort/) requires either 'title' or 'year' string parameters.`})
        }
        
    })
    
}

// /api/paintings/ref Returns just the specified painting
function returnPaintingRef(app,db){
    app.get('/api/paintings/:ref', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,
            artists (artistId,firstName,lastName,nationality,gender,yearOfBirth,yearOfDeath,details,artistLink),
            galleries(galleryId,galleryName,galleryNativeName,galleryCity,galleryAddress,galleryCountry,latitude,longitude,galleryWebSite,flickrPlaceId,yahooWoeId,googlePlaceId),
            imageFileName,
            title,
            shapeId,
            museumLink,
            accessionNumber,
            copyrightText,
            description,
            excerpt,
            yearOfWork,
            width,
            height,
            medium,
            cost,
            MSRP,
            googleLink,
            googleDescription,
            wikiLink,
            jsonAnnotations
            `)
        .eq('paintingId',req.params.ref)
        .order('title', { ascending: true});
        draftResponseInt(req,res,data);
    })
    
}

// /api/paintings/search/substring Returns the paintings whose title (case insensitive) contains the provided substring
function returnPaintingsTitle(app,db){
    app.get('/api/paintings/search/:substring', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,
            artists (artistId,firstName,lastName,nationality,gender,yearOfBirth,yearOfDeath,details,artistLink),
            galleries(galleryId,galleryName,galleryNativeName,galleryCity,galleryAddress,galleryCountry,latitude,longitude,galleryWebSite,flickrPlaceId,yahooWoeId,googlePlaceId),
            imageFileName,
            title,
            shapeId,
            museumLink,
            accessionNumber,
            copyrightText,
            description,
            excerpt,
            yearOfWork,
            width,
            height,
            medium,
            cost,
            MSRP,
            googleLink,
            googleDescription,
            wikiLink,
            jsonAnnotations
            `)
        .ilike('title',`%${req.params.substring}%`)
        .order('title', { ascending: true});
        draftResponseString(req,res,data);
    })
    
}

// /api/paintings/years/start/end Returns the paintings between two years, ordered by yearOfWork
function returnPaintingsYears(app,db){
    app.get('/api/paintings/years/:low/:high', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,
            artists (artistId,firstName,lastName,nationality,gender,yearOfBirth,yearOfDeath,details,artistLink),
            galleries(galleryId,galleryName,galleryNativeName,galleryCity,galleryAddress,galleryCountry,latitude,longitude,galleryWebSite,flickrPlaceId,yahooWoeId,googlePlaceId),
            imageFileName,
            title,
            shapeId,
            museumLink,
            accessionNumber,
            copyrightText,
            description,
            excerpt,
            yearOfWork,
            width,
            height,
            medium,
            cost,
            MSRP,
            googleLink,
            googleDescription,
            wikiLink,
            jsonAnnotations
            `)
            .gte('yearOfWork',req.params.low)
            .lte('yearOfWork',req.params.high)
            .order('yearOfWork',{ ascending: true});
        try {
            if (isNaN(req.params.low) | isNaN(req.params.high)) {
                res.send({Error: `Both parameters (${req.params.low} & ${req.params.high}) must be a number.`})
            } else if (req.params.low > req.params.high){
                res.send(rangeError(req.params.low, req.params.high))
            } else if (data.length < 1) {
                res.send({Error: `No results found for range ${req.params.low} - ${req.params.high}.`})
            } else {
                res.send(data);
            }
        } catch {

        }
        
    })
    
}

// /api/paintings/galleries/ref Returns all the paintings in a given gallery
function returnPaintingsGallery(app,db){
    app.get('/api/paintings/galleries/:ref', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,
            artists (artistId,firstName,lastName,nationality,gender,yearOfBirth,yearOfDeath,details,artistLink),
            galleries(galleryId,galleryName,galleryNativeName,galleryCity,galleryAddress,galleryCountry,latitude,longitude,galleryWebSite,flickrPlaceId,yahooWoeId,googlePlaceId),
            imageFileName,
            title,
            shapeId,
            museumLink,
            accessionNumber,
            copyrightText,
            description,
            excerpt,
            yearOfWork,
            width,
            height,
            medium,
            cost,
            MSRP,
            googleLink,
            googleDescription,
            wikiLink,
            jsonAnnotations
            `)
        .eq('galleryId', req.params.ref)
        .order('title',{ ascending: true});
        draftResponseInt(req,res,data);
       
    })
    
}

// /api/paintings/artist/ref Returns all the paintings by a given artist (use the artistId field)
function returnPaintingsArtist(app,db){
    app.get('/api/paintings/artist/:ref', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,
            artists (artistId,firstName,lastName,nationality,gender,yearOfBirth,yearOfDeath,details,artistLink),
            galleries(galleryId,galleryName,galleryNativeName,galleryCity,galleryAddress,galleryCountry,latitude,longitude,galleryWebSite,flickrPlaceId,yahooWoeId,googlePlaceId),
            imageFileName,
            title,
            shapeId,
            museumLink,
            accessionNumber,
            copyrightText,
            description,
            excerpt,
            yearOfWork,
            width,
            height,
            medium,
            cost,
            MSRP,
            googleLink,
            googleDescription,
            wikiLink,
            jsonAnnotations
            `)
        .eq('artistId', req.params.ref)
        .order('title',{ ascending: true});
        draftResponseInt(req,res,data);
    })
    
}

// /api/paintings/artists/country/ref Returns all the paintings by artists whose nationality begins with the provided substring
function returnPaintingsNationality(app,db){
    app.get('/api/paintings/artists/country/:substring', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,
            artists!inner(*),
            galleries(*),
            imageFileName,
            title,
            shapeId,
            museumLink,
            accessionNumber,
            copyrightText,
            description,
            excerpt,
            yearOfWork,
            width,
            height,
            medium,
            cost,
            MSRP,
            googleLink,
            googleDescription,
            wikiLink,
            jsonAnnotations
            `)
        .ilike('artists.nationality',`${req.params.substring}%`)
        .order(`title`, { ascending: true});
        draftResponseString(req,res,data);
    })
    
}

// /api/genres Returns all the genres
function returnGenres(app,db){
    app.get('/api/genres', async (req, res) => {
        const {data, error} = await db
        .from('genres')
        .select(`
            genreId,
            genreName,
            eras (eraId,eraName,eraYears),
            description,
            wikiLink    
        `);
        res.send(data);
    })
    
}

// /api/genres/ref Returns just the specified genre (use the genreId field)
function returnGenreRef(app,db){
    app.get('/api/genres/:ref', async (req, res) => {
        const {data, error} = await db
        .from('genres')
        .select(`
            genreId,
            genreName,
            eras (eraId,eraName,eraYears),
            description,
            wikiLink    
        `)
        .eq('genreId',req.params.ref);
        draftResponseInt(req,res,data);
    })
    
}

// /api/genres/painting/ref Returns the genres used in a given painting (order by genreName in ascending order)
function returnGenresPainting(app,db){
    app.get('/api/genres/painting/:ref', async (req, res) => {
        const {data, error} = await db
        .from('genres')
        .select(`genreId,
            genreName,
            eras(*),
            description,
            wikiLink,
            paintingGenres!inner()`)
        .eq('paintingGenres.paintingId', req.params.ref)
        .order('genreName', { ascending: true});
        draftResponseInt(req,res,data);
    })
    
}

// /api/paintings/genre/ref Returns all the paintings for a given genre (use the genreId field)
function returnPaintingsGenre(app,db){
    app.get('/api/paintings/genre/:ref', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,title,yearOfWork,paintingGenres!inner()
            `)
        .eq('paintingGenres.genreId', req.params.ref)
        .order('yearOfWork', { ascending: true});
        draftResponseInt(req,res,data);
    })
    
}

// /api/paintings/era/ref Returns all the paintings for a given era (use the eraId field)
function returnPaintingsEra(app,db){
    app.get('/api/paintings/era/:ref', async (req, res) => {
        const {data, error} = await db
        .from('paintings')
        .select(`
            paintingId,title,yearOfWork,paintingGenres!inner(genres!inner(eras!inner()))
            `)
        .eq('paintingGenres.genres.eras.eraId', req.params.ref)
        .order('yearOfWork');
        draftResponseInt(req,res,data);
    })
    
}

// /api/counts/genres Returns the genre name and the number of paintings for each genre, sorted by the number of paintings (fewest to most).
function returnGenresCount(app,db){
    app.get('/api/counts/genres', async (req, res) => {
        const {data, error} = await db
        .from('genres')
        .select(`genreName, paintingGenres!inner(paintingId)`);
        let newData = []
        data.forEach(e => {
            newData.push({genreName: e.genreName, count: e.paintingGenres.length})
        });
        newData.sort((a,b)=>{return a.count - b.count})
        res.send(newData);
    })    

}

// /api/counts/artists Returns the artist name (first name space last name) and the number of paintings for each artist, sorted by the number of paintings (most to fewest).
function returnArtistsCount(app,db){
    app.get('/api/counts/artists', async (req, res) => {
        const {data, error} = await db
        .from('artists')
        .select(`
            firstName,lastName,paintings!inner(paintingId)`
            );
        let newData = []
        data.forEach(e =>{
            newData.push({name: `${e.firstName} ${e.lastName}`, count: e.paintings.length});
        })
        newData.sort((a,b)=>{return b.count - a.count});
        res.send(newData);
    })
    
}

// /api/counts/topgenres/ref Returns the genre name and the number of paintings for each genre, sorted by the number of paintings (most to least) for genres having over some set number of paintings
function returnTopGenres(app,db){
    app.get('/api/counts/topgenres/:ref', async (req, res) => {
        const {data, error} = await db
        .from('genres')
        .select(`genreName, paintingGenres!inner(paintingId)`)
        let newData = []
        data.forEach(e=>{
            if (e.paintingGenres.length > req.params.ref) {
                newData.push({genreName: e.genreName, count: e.paintingGenres.length})
            }
        })
        newData.sort((a,b)=>{return b.count - a.count})
        draftResponseInt(req,res,newData);
    })
    
}




//Auxiliuary Functions


//not found error message (data array < 1)
function notFound(searched){
    return {Error: `No results found for '${searched}'.`};
}

//range error message (a > b) where a must < b
function rangeError(low,high){
    return {Error: `Range syntax - ${low} must not be greater than ${high}. Check requested range, consider swapping the values.`};
}

//type error (NaN where num is expected)
function typeErrorNumber(searched){
    return {Error: `Datatype mismatch. Specified endpoint requires a number. '${searched}''s data type is ${typeof searched}.`};
}

//type error for string (not actually ever invoked, as everything casts into a string)
function typeErrorString(searched){
    return {Error: `Datatype mismatch. Specified endpoint requires a string. '${searched}''s data type is ${typeof searched}.`};
}

//drafts response function for endpoints using int parameters - performs error handling
function draftResponseInt(req,res,data){
    try {
        if (isNaN(req.params.ref)) {
            res.send(typeErrorNumber(req.params.ref))
        } else if (data.length < 1){
            res.send(notFound(req.params.ref))
        } else {
            res.send(data);
        }
    } catch {
        res.send({Error: `An error occured. Please document how you got here. Feel free to try another query.`})
    }
}

//drafts response function for endpoints using string parameters - perfoms error handling
function draftResponseString(req,res,data){
    try {
        if (typeof req.params.substring != 'string') {
            res.send(typeErrorString(req.params.substring))
        } else if (data.length < 1){
            res.send(notFound(req.params.substring))
        } else {
            res.send(data);
        }
    } catch {
        res.send({Error: `An error occured. Please document how you got here. Feel free to try another query.`})
    }
}

export {handleQueries};