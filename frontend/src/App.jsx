import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage  from './pages/HomePage'; 
import MainLayout from './layouts/MainLayout';
import ResultPage from './pages/ResultPage';
import SuggestionsPage from './pages/suggestion';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
      </Route>
    </>
  ))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
