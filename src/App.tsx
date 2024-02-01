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
// import { headphonePageContent } from "./data"
// import type { productContant } from "./data"
export interface Product {
  productId: number;
  productMainImg: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  isNew: string;
  title: string;
  paragraph: string,

  features: {
    part1: string;
    part2: string
  };
  inTheBox: string;
  productImages: {
    image1: string;
    image2: string;
    image3: string;
  };
  relatedProducts: {
    product1: { title: string, images: { mobile: string; tablet: string; desktop: string } }
    product2: { title: string, images: { mobile: string; tablet: string; desktop: string } }
    product3: { title: string, images: { mobile: string; tablet: string; desktop: string } }
  };
  price: number;
}

export interface HeadphonePageContentType {
  [productId: string]: Product;
}
const headphonePageContent: HeadphonePageContentType = {
  "XX99 Mark IIHeadphones": {
    productId: 1,
    inTheBox: "2",
    isNew: "NEW PRODUCT",
    title: "XX99 Mark II Headphones",
    features: {
      part1: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      part2: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hourbattery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
    },
    productMainImg: {
      mobile:
        "../../src/assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    },
    price: 2.999,
    paragraph: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    productImages: {
      image1: "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
      image2: "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
      image3: "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
    },
    relatedProducts: {
      product1: {
        title: "XX99 MARK I",
        images: {
          mobile: "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product1.jpg",
          tablet: "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
          desktop: "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        }
      },
      product2: {
        title: "XX59",
        images: {
          mobile: "../../src/assets/images/product-xx59-headphones/mobile/image-product1.jpg",
          tablet: "../../src/assets/images/product-xx59-headphones/tablet/image-product.jpg",
          desktop: "../../src/assets/images/product-xx59-headphones/desktop/image-product.jpg",
        }
      },
      product3: {
        title: "ZX9 SPEAKER",
        images: {
          mobile:
            "../../src/assets/images/product-zx9-speaker/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-zx9-speaker/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-zx9-speaker/desktop/image-product.jpg",
        }
      },

    }
  }

  // ... other properties
}
// Add more products as needed

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
          const product = headphonePageContent[productId];
          return product;
        }}
        element={<Cart />}
      />
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
