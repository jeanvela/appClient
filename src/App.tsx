import './App.css'
import { Toaster } from 'sonner'
import RegisterQR from './pages/registerQR/RegisterQR'

function App() {
  return (
    <>
      <RegisterQR/>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          duration: 6000,
        }}
      />
    </>
  )
}

export default App
