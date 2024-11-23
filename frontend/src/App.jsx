import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home'; 

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="home" />
    </>
  ))
  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
