import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Root from "./Root"
import HomePage from "./pages/HomePage"
import HeadPhonesPage from "./pages/HeadPhonesPage"
import SpeakersPage from "./pages/SpeakersPage"
import EarphonePage from "./pages/EarphonePage"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<HomePage />} />
    <Route path="/headphones" element={<HeadPhonesPage />} />
    <Route path="/speakers" element={<SpeakersPage />} />
    <Route path="/earphones" element={<EarphonePage />} />
  </Route>
))


function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
