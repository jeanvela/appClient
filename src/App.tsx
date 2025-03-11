import './App.css'
import Navbar from './components/Navbar'
// import RegisterClient from './components/RegisterClient'
import SideBar from './components/SiedeBar'
import Clients from './pages/Clients'

function App() {
  return (
    // <RegisterClient />
    <>
      <Navbar />
      <main className='min-h-dvh flex'>
        <SideBar />
        <Clients />
      </main>
    </>
  )
}

export default App
