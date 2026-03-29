
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'


const fetchPlayer = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playerpromise = fetchPlayer()
  const [coin,setCoin] = useState(50000)
 
  return (
    <>
    <div className='container mx-auto'>
      <Navbar coin={coin}></Navbar>
     <Banner></Banner>
     <Suspense fallback= {<span className="loading loading-spinner loading-xl"></span>}>
        <Players playerpromise = {playerpromise} setCoin={setCoin} coin={coin}></Players>
     </Suspense>
    </div>
     
     
    </>
  )
}

export default App
