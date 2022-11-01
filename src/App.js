
import { useState } from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import './App.css';

function App() {
  const [toogle, setToogle] = useState(true)
  return (
    <div className="App">
      <Header />
      <AlbumList toogle={toogle} />
      <AddAlbum setToogle={setToogle} toogle={toogle} />
    </div>
  );
}

export default App;
