
import { useState } from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true) //When we want to share information, the AlbumList & the AddAlbum want to communicate to each other, so we will create a toogle switch. Toogle & setToogle is so that AlbumList and AddAlbum can talk to each other. 
  return (
    <div className="App">
      <Header />
      <AlbumList toggle={toggle} /> 
      <AddAlbum setToggle={setToggle} toggle={toggle} />
    </div>
  ); //We need setToogle to set it the opposite, Line 13 is to hit the switch and it will go in the opposite of what it is 
}

export default App;
