import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  var [photos, setPhotos] = useState();
  
  var query = async (content) => {
    await axios.get(`https://pixabay.com/api/?key=44068099-4363f9b212e2539433215b8c2&q=${content}&image_type=photo`).then((response) => {
      var temp = []
      response.data.hits.forEach((picture, index, array) => {
        temp.push([picture.previewURL, picture.pageURL])
        if(index === array.length -1){
          setPhotos(temp);
        }
      })
    })
  } 

  return (
    <div className="App">
      <div className="header">
        <button onClick={()=>{query("cats")}} className='button'>
          Koty
        </button> 
        <button onClick={()=>{query("dogs")}} className='button'>
          Psy
        </button> 
        <button onClick={()=>{query("cities")}} className='button'>
          Miasta
        </button> 
        <button onClick={()=>{query("lakes")}} className='button'>
          Jeziora
        </button> 
      </div>
      <div className="main">
        {photos && photos.map((photo) => 
          <div className="photo">
            <a href={photo[1]} target='blank'>
              <img src={photo[0]}></img>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
