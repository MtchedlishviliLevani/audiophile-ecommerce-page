interface earphonePage {
  category: string;
  title: string;
  paragraph: string;
  buttonText: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const earphonePageContent: earphonePage[] = [
  {
    category: "NEW PRODUCT",
    title: "XX99 Mark II Headphones",
    paragraph:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    buttonText: "SEE PRODUCT",
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
export default earphonePageContent;
