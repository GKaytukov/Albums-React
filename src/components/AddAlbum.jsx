import { useState } from "react"

export default function AddAlbum({ setToggle, toggle }) { //It is passing setAlbums when we submit the forms 
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState(1970)
    const handleSubmit = (e) => {
        e.preventDefault() 
        //Let's check to see that they entered all the data:
        if (!album || !artist || !year) { //Checking to see there is all data. 
            alert('Please enter all info') //This is just a backup if the required does not work. 
            return
        }
        const newAlbum = { artist, album, year } //Creating a new album with the 3 state variables, we are putting it together as a single object.
        fetch('https://albums-api-gk.web.app/albums', { //This is a basic fetch to a .get request. We didn't a lot only a few lines.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'//We need to put in objects, such as the method, we need to tell it is a post request, when we choose JSON it automatically for us the packages. We have to tell the in the headers that it is JSON. 
            },
            body: JSON.stringify(newAlbum)//We use JSON stringify it converts it in actual JSON but all into one string but if converted to a variable you can JSON.parse(msg). We send it JSON stringify to our API.
        })
            .then(() => {
                //Assume it worked... If I don't get an error. We are sending a message to up to APP and down to AlbumList. Through props we are updating state at the same time. 
                setToggle(!toggle) 
                setAlbum('')
                setArtist('')
                setYear(1970)
            })
            .catch(alert)
    }
    return ( //Has 3 elements and a submit, when we hit this form, on each input we are taking control on the state, we are controlling the value. We are tracking them as they go, they are already in state for us. This whole function, we are trying to prevent advent, to reload the page. It is fixable with the .e format. We need to keep this old behavior. Old default behavior, prevent default is a new function. With react we want a single page application, if the page leaves we lose state and all the other information. 
        <section className="add-album">
            <h3>Add new Album</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album:
                    <input type="text" name="album" required
                        onChange={e => setAlbum(e.target.value)}
                        value={album} />
                </label><br />
                <label htmlFor="artist">Artist:
                    <input type="text" name="artist" required
                        onChange={e => setArtist(e.target.value)}
                        value={artist} />
                </label><br />
                <label htmlFor="year">Year:
                    <input type="number" name="year" required
                        onChange={e => setYear(e.target.value)}
                        value={year} />
                </label ><br />
                <input type='submit' value='Add Album' />
            </form>
        </section>
    )
}

//Line 13 all you can type is an empty string 