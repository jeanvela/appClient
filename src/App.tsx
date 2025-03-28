import './App.css'
import RegisterClient from '@/pages/registerClient/RegisterClient'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <RegisterClient />
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
