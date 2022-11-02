import { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'

export default function AlbumList({toggle}) {//It's get toogle from APP, we have a state variable b/c we want 
    const [albums, setAlbums] = useState() //This is where I am getting the albums, after it gets the list, albumlist needs s
    useEffect(() => { //It's getting a list albums from the parent, APP has the state 
    fetch(process.env.REACT_APP_ENDPOINT+'/albums')
    .then(response => response.json()) //Now, the response here, I say here are the new albums then I get back some data 
    .then(setAlbums)
    .catch(alert)
}, [toggle]) //Empty array means do it once. And then run a use effect. If albums are undefined the first time it is redenred 
    
    return ( //Run it once 
        <main className='album-list'>
            {!albums
            ? <p>Loading...</p>
            : albums.map(thisAlbum=> <AlbumCard key={thisAlbum.albumId} thisAlbum={thisAlbum} />) 
            }
        </main>
    )
}