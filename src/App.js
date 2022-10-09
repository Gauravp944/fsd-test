
import './App.css';
import { useEffect, useState } from "react";
import {Global_Values} from './API'


function App() {
  return (
    <div className="App">
      <PhoneList />
    </div>
  );
}

// const link="https://fsd-test-gaurav.herokuapp.com";

const API_value=Global_Values.link.toString();


function PhoneList(){
  const [mobiles,setMobiles] = useState([]);

  useEffect(()=>{
    fetch(`${API_value}/mobiles`)
      .then((data)=>data.json())
      .then((mbls)=>setMobiles(mbls));
  },[]);

  return(
    <div className='phone-list-container'>
      {mobiles.map(mobile =><Phone mobile={mobile}/>)}
    </div>
  );
}

function Phone({mobile}){
  return(
    <div className='phone-container'>
      <img src={mobile.img} alt={mobile.model} className='phone-picture' />
      <h2 className='phone-name'>{mobile.model}</h2>
      <p className='phone-company'>{mobile.company}</p>
    </div>
  );
}

export default App;
