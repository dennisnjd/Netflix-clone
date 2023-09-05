import React from 'react' 
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,actions,comedy,horror,documentry} from './urls'


function App() {
  return (
    <div>

    <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={actions} title='Action' isSmall />
    <RowPost url={comedy} title='Comedy' isSmall />
    <RowPost url={horror} title='Horror' isSmall />
    <RowPost url={documentry} title='Documentares' isSmall />


    </div>
  );
}

export default App;
