import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import HomePage from "./pages/HomePage";
import HeadPhonesPage from "./pages/HeadPhonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonePage from "./pages/EarphonePage";
import Cart from "./pages/Cart";
import { cartPageContent } from "./data";
import CheckoutPage from "./pages/CheckoutPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/headphones" element={<HeadPhonesPage />} />
      <Route path="/speakers" element={<SpeakersPage />} />
      <Route path="/earphones" element={<EarphonePage />} />
      <Route
        path="/cart/:productId"
        loader={async ({ params }) => {
          const productId: string | undefined = params?.productId;
          if (!productId) {
            throw new Error("Product ID is undefined");
          }
          const product = cartPageContent[productId];
          return product;
        }}
        element={<Cart />}
      />
      <Route element={<CheckoutPage />} path="/checkout" />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
