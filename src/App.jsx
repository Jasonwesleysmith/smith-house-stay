import {useEffect, useState} from 'react';
import Header from "./Header";
import Hero from "./Hero";
import Weather from './Weather';
import Welcome from './Welcome';

const App = () => {
  const [checkIn, setCheckIn] = useState(true)
  
  useEffect(()=> {
    if(document.cookie === "checkIn=false") setCheckIn(false) 
    document.cookie = "checkIn=false";
  }, [])

  if (checkIn) return <Welcome setCheckIn={setCheckIn} />

  return (
    <>
      <Header />
      <Hero />
      <Weather width={300} />
    </>
  );
}

export default App;
