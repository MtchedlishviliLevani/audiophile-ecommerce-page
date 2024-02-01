export interface productContant {
  category: string;
  title: string;
  paragraph: string;
  buttonText: string;
  productId?: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const headphonePageContent: productContant[] = [
  {
    category: "NEW PRODUCT",
    title: "XX99 Mark II Headphones",
    paragraph:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    buttonText: "SEE PRODUCT",
    productId: 1,
    image: {
      mobile:
        "../../src/assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    },
  },
  {
    category: "",
    title: "XX99 Mark I Headphones",
    paragraph:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    buttonText: "SEE PRODUCT",
    productId: 2,
    image: {
      mobile:
        "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
    },
  },
  {
    category: "",
    title: "XX59 Headphones",
    paragraph:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    buttonText: "SEE PRODUCT",
    productId: 3,
    image: {
      mobile:
        "../../src/assets/images/product-xx59-headphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-xx59-headphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-xx59-headphones/desktop/image-product.jpg",
    },
  },
];

export const speakerPageContent: productContant[] = [
  {
    category: "NEW PRODUCT",
    title: "ZX9 SPEAKER",
    paragraph:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    buttonText: "SEE PRODUCT",
    image: {
      mobile:
        "../../src/assets/images/product-zx9-speaker/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-zx9-speaker/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-zx9-speaker/desktop/image-product.jpg",
    },
  },
  {
    category: "",
    title: "ZX7 SPEAKER",
    paragraph:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    buttonText: "SEE PRODUCT",
    image: {
      mobile:
        "../../src/assets/images/product-zx7-speaker/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-zx7-speaker/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-zx7-speaker/desktop/image-product.jpg",
    },
  },
];

export const earphonePageContent: productContant[] = [
  {
    category: "NEW PRODUCT",
    title: "YX1 WIRELESS EARPHONES",
    paragraph:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    buttonText: "SEE PRODUCT",
    image: {
      mobile:
        "../../src/assets/images/product-yx1-earphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-yx1-earphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-yx1-earphones/desktop/image-product.jpg",
    },
  },
];
