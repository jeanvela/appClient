import Root from '@/pages/root/Root'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>Error</p>,
    children: [
      { path: '/' }
    ]
  }
])