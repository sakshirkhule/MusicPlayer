import { useEffect,useState } from "react";
import Players from "./component/Players";


function App() {

  const[songs]=useState([
    {
    title:"Perfect",
    artist:"Taylor Swift",
    img_src:"./images/perfect.jpg",
    src:"./songs/perfect.mp3"
    },
    {
      title:"Dandelions",
      artist:"Ruth B",
      img_src:"./images/dandelions.jpg",
      src:"./songs/Dandelions.mp3"
    },
    {
      title:"Satranga",
      artist:"Arjit Sigh",
      img_src:"./images/animal.jpg",
      src:"./songs/Satranga.mp3"
      },
      {
        title:"Humari Adhuri kahani",
        artist:"Arjit Sigh",
        img_src:"./images/humari adhuri khani.jpg",
        src:"./songs/humari.mp3"
        },
        {
          title:"Love Story",
          artist:"Taylor Swift",
          img_src:"./images/Love story.jpg",
          src:"./songs/lovestory.mp3"
          },
    
     

])
const [currentSongIndex,setCurrentSongIndex]=useState(0);
const [nextSongIndex,setNextSongIndex]=useState(0);

useEffect(() =>{
  setNextSongIndex(() =>{
    if(currentSongIndex+ 1> songs.length -1){
      return 0
    }else{
      return currentSongIndex+1
    }
  })

},[currentSongIndex, songs.length])


  return (
    <div className="App">
     <Players   
     
     currentSongIndex={currentSongIndex}
     setCurrentSongIndex={setCurrentSongIndex}
     nextSongIndex={nextSongIndex}
     songs={songs}
     />
    </div>
  );
}

export default App;
