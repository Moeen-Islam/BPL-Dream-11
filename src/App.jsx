
import { Suspense } from 'react'
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
 
  return (
    <>
    <div className='container mx-auto'>
      <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback= {<span className="loading loading-spinner loading-xl"></span>}>
        <Players playerpromise = {playerpromise}></Players>
     </Suspense>
    </div>
     
     
    </>
  )
}

export default App
