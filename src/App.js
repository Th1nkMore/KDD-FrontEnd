import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@feb-team/legao-react/dist/styles/css/legao.all.css'
import { NavBar } from './components/NavBar/NavBar'
import { KeplerCard } from './components/KeplerCard/KeplerCard'
import { ChatCanvas } from './components/ChatCanvas/ChatCanvas'
import { TaxiDayCard } from './components/TaxiDayCard/TaxiDayCard'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App () {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="App">
      <div className='main-wrapper'>
        <NavBar handleShow={handleShow}
        />
        <br />
        <KeplerCard
          height={window.innerHeight}
          width={window.innerWidth}
        />
        <TaxiDayCard
          height={window.innerHeight}
          width={window.innerWidth}
        />
        <ChatCanvas handleClose={handleClose} show={show} />
        <Footer />
      </div>
    </div>
  )
}

export default App
