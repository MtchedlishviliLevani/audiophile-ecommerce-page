export interface productContant {
  category: string;
  title: string;
  paragraph: string;
  buttonText: string;
  productId?: number;
  pathName: string;
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
    pathName: "/cart/XX99MARKII",
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
    pathName: "/cart/XX99MARKI",
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
    pathName: "/cart/XX59",
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
    pathName: "/cart/ZX9",
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
    pathName: "/cart/ZX7",
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
    pathName: "/cart/YX1",
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

///

export interface Product {
  productId: number;
  productMainImg: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  isNew: string;
  title: string;
  shortTitle: string;
  paragraph: string;

  features: {
    part1: string;
    part2: string;
  };
  inTheBox?: {
    amounts: {
      amount1: string;
      amount2: string;
      amount3: string;
      amount4: string;
      amount5?: string;
      amount6?: string;
    };
    contents: {
      content1: string;
      content2: string;
      content3: string;
      content4: string;
      content5?: string;
      content6?: string;
    };
  };
  productImages: {
    image1: string;
    image2: string;
    image3: string;
  };
  relatedProducts: {
    product1: {
      pathName: string;
      title: string;
      images: { mobile: string; tablet: string; desktop: string };
    };
    product2: {
      pathName: string;
      title: string;
      images: { mobile: string; tablet: string; desktop: string };
    };
    product3: {
      pathName: string;
      title: string;
      images: { mobile: string; tablet: string; desktop: string };
    };
  };
  price: number;
}

export interface cartPageContentType {
  [productId: string]: Product;
}

/// CARTabz
export const cartPageContent: cartPageContentType = {
  XX99MARKII: {
    productId: 1,
    shortTitle: "XX99 MK II",
    inTheBox: {
      amounts: {
        amount1: "1x",
        amount2: "2x",
        amount3: "1x",
        amount4: "1x",
        amount5: "1x",
      },
      contents: {
        content1: "Headphone Unit",
        content2: "Replacement Earcups",
        content3: "User Manual",
        content4: "3.5mm 5m Audio Cable",
        content5: "Travel Bag",
      },
    },
    isNew: "NEW PRODUCT",
    title: "XX99 Mark II Headphones",
    features: {
      part1:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      part2:
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hourbattery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    },
    productMainImg: {
      mobile:
        // fix
        "/assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    },
    price: 2999,
    paragraph:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    productImages: {
      image1:
        "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
      image2:
        "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
      image3:
        "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
    },
    relatedProducts: {
      product1: {
        pathName: "/cart/XX99MARKII",
        title: "XX99 MARK I",
        images: {
          mobile:
            "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        },
      },
      product2: {
        pathName: "/cart/XX59",
        title: "XX59",
        images: {
          mobile:
            "../../src/assets/images/product-xx59-headphones/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-xx59-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx59-headphones/desktop/image-product.jpg",
        },
      },
      product3: {
        pathName: "/cart/ZX9",
        title: "ZX9 SPEAKER",
        images: {
          mobile:
            "../../src/assets/images/product-zx9-speaker/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-zx9-speaker/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-zx9-speaker/desktop/image-product.jpg",
        },
      },
    },
  },
  // new product
  XX99MARKI: {
    productId: 2,
    shortTitle: "XX99 MARK I",
    title: "XX99 Mark I Headphones",
    paragraph:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",

    price: 1750,
    inTheBox: {
      contents: {
        content1: "Headphone Unit",
        content2: "Replacement Earcups",
        content3: "User Manual",
        content4: "3.5mm 5m Audio Cable",
      },
      amounts: {
        amount1: "1x",
        amount2: "2x",
        amount3: "1x",
        amount4: "1x",
      },
    },
    isNew: "",
    features: {
      part1:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
      part2:
        "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    },
    productMainImg: {
      mobile:
        "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
    },
    productImages: {
      image1:
        "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
      image2:
        "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
      image3:
        "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
    },
    relatedProducts: {
      product1: {
        pathName: "/cart/XX99MARKII",
        title: "XX99 MARK II",
        images: {
          mobile:
            "../../src/assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg",
        },
      },
      product2: {
        pathName: "/cart/XX99MARKI",
        title: "XX99 MARK I",
        images: {
          mobile:
            "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        },
      },
      product3: {
        pathName: "/cart/ZX9",
        title: "ZX9 SPEAKER",
        images: {
          mobile:
            "../../src/assets/images/product-zx9-speaker/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-zx9-speaker/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-zx9-speaker/desktop/image-product.jpg",
        },
      },
    },
  },
  XX59: {
    productId: 3,
    shortTitle: "XX59",
    title: "XX59 Headphones",
    paragraph:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,
    inTheBox: {
      contents: {
        content1: "Headphone Unit",
        content2: "Replacement Earcups",
        content3: "User Manual",
        content4: "3.5mm 5m Audio Cable",
      },
      amounts: {
        amount1: "1x",
        amount2: "2x",
        amount3: "1x",
        amount4: "1x",
      },
    },
    isNew: "",
    features: {
      part1:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      part2:
        "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    },
    productMainImg: {
      mobile:
        "../../src/assets/images/product-xx59-headphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-xx59-headphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-xx59-headphones/desktop/image-product.jpg",
    },
    productImages: {
      image1:
        "../../src/assets/images/product-xx59-headphones/desktop/image-gallery-1.jpg",
      image2:
        "../../src/assets/images/product-xx59-headphones/desktop/image-gallery-3.jpg",
      image3:
        "../../src/assets/images/product-xx59-headphones/desktop/image-gallery-2.jpg",
    },
    relatedProducts: {
      product1: {
        pathName: "/cart/XX99MARKII",
        title: "XX99 MARK II",
        images: {
          mobile:
            "../../src/assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg",
        },
      },
      product2: {
        pathName: "/cart/XX99MARKI",
        title: "XX99 MARK I",
        images: {
          mobile:
            "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        },
      },
      product3: {
        pathName: "/cart/ZX9",
        title: "ZX9 SPEAKER",
        images: {
          mobile:
            "../../src/assets/images/product-zx9-speaker/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-zx9-speaker/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-zx9-speaker/desktop/image-product.jpg",
        },
      },
    },
  },
  ZX9: {
    productId: 4,
    shortTitle: "ZX9",
    title: "ZX9 SPEAKER",
    paragraph:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",

    price: 4500,
    inTheBox: {
      contents: {
        content1: "Speaker Unit",
        content2: "Speaker Cloth Panel",
        content3: "User Manual",
        content4: "3.5mm 10m Audio Cable",
        content5: "10m Optical Cable",
      },
      amounts: {
        amount1: "2x",
        amount2: "2x",
        amount3: "1x",
        amount4: "1x",
        amount5: "1x",
      },
    },
    isNew: "NEW PRODUCT",
    features: {
      part1:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",

      part2:
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    },
    productMainImg: {
      mobile:
        "../../src/assets/images/product-zx9-speaker/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-zx9-speaker/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-zx9-speaker/desktop/image-product.jpg",
    },
    productImages: {
      image1:
        "../../src/assets/images/product-zx9-speaker/desktop/image-gallery-1.jpg",
      image2:
        "../../src/assets/images/product-zx9-speaker/desktop/image-gallery-3.jpg",
      image3:
        "../../src/assets/images/product-zx9-speaker/desktop/image-gallery-2.jpg",
    },
    relatedProducts: {
      product1: {
        pathName: "/cart/ZX7",
        title: "ZX7 SPEAKER",
        images: {
          mobile:
            "../../src/assets/images/product-zx7-speaker/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-zx7-speaker/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-zx7-speaker/desktop/image-product.jpg",
        },
      },
      product2: {
        pathName: "/cart/XX99MARKI",
        title: "XX99 MARK I",
        images: {
          mobile:
            "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        },
      },
      product3: {
        pathName: "/cart/XX59",
        title: "XX59",
        images: {
          mobile:
            "../../src/assets/images/product-xx59-headphones/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-xx59-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx59-headphones/desktop/image-product.jpg",
        },
      },
    },
  },
  ZX7: {
    productId: 5,
    shortTitle: "ZX7",
    title: "ZX7 SPEAKER",
    paragraph:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",

    price: 3500,
    inTheBox: {
      contents: {
        content1: "Speaker Unit",
        content2: "Speaker Cloth Panel",
        content3: "User Manual",
        content4: "3.5mm 10m Audio Cable",
        content5: "7.5m Optical Cable",
      },
      amounts: {
        amount1: "2x",
        amount2: "2x",
        amount3: "1x",
        amount4: "1x",
        amount5: "1x",
      },
    },
    isNew: "",
    features: {
      part1:
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",

      part2:
        "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    },
    productMainImg: {
      mobile:
        "../../src/assets/images/product-zx7-speaker/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-zx7-speaker/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-zx7-speaker/desktop/image-product.jpg",
    },
    productImages: {
      image1:
        "../../src/assets/images/product-zx7-speaker/desktop/image-gallery-1.jpg",
      image2:
        "../../src/assets/images/product-zx7-speaker/desktop/image-gallery-3.jpg",
      image3:
        "../../src/assets/images/product-zx7-speaker/desktop/image-gallery-2.jpg",
    },
    relatedProducts: {
      product3: {
        pathName: "/cart/ZX9",
        title: "ZX9 SPEAKER",
        images: {
          mobile:
            "../../src/assets/images/product-zx9-speaker/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-zx9-speaker/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-zx9-speaker/desktop/image-product.jpg",
        },
      },
      product1: {
        pathName: "/cart/XX99MARKI",
        title: "XX99 MARK I",
        images: {
          mobile:
            "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        },
      },
      product2: {
        pathName: "/cart/XX59",
        title: "XX59",
        images: {
          mobile:
            "../../src/assets/images/product-xx59-headphones/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-xx59-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx59-headphones/desktop/image-product.jpg",
        },
      },
    },
  },
  YX1: {
    productId: 6,
    shortTitle: "YX1",
    title: "YX1 WIRELESS EARPHONES",
    paragraph:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",

    price: 599,
    inTheBox: {
      contents: {
        content1: "Earphone Unit",
        content2: "Multi-size Earplugs",
        content3: "User Manual",
        content4: "USB-C Charging Cable",
        content5: "Travel Pouch",
      },
      amounts: {
        amount1: "2x",
        amount2: "6x",
        amount3: "1x",
        amount4: "1x",
        amount5: "1x",
      },
    },
    isNew: "NEW PRODUCT",
    features: {
      part1:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",

      part2:
        "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    },
    productMainImg: {
      mobile:
        "../../src/assets/images/product-yx1-earphones/mobile/image-product.jpg",
      tablet:
        "../../src/assets/images/product-yx1-earphones/tablet/image-product.jpg",
      desktop:
        "../../src/assets/images/product-yx1-earphones/desktop/image-product.jpg",
    },
    productImages: {
      image1:
        "../../src/assets/images/product-yx1-earphones/desktop/image-gallery-1.jpg",
      image2:
        "../../src/assets/images/product-yx1-earphones/desktop/image-gallery-3.jpg",
      image3:
        "../../src/assets/images/product-yx1-earphones/desktop/image-gallery-2.jpg",
    },
    relatedProducts: {
      product3: {
        pathName: "/cart/ZX9",
        title: "ZX9 SPEAKER",
        images: {
          mobile:
            "../../src/assets/images/product-zx9-speaker/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-zx9-speaker/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-zx9-speaker/desktop/image-product.jpg",
        },
      },
      product1: {
        pathName: "/cart/XX99MARKI",
        title: "XX99 MARK I",
        images: {
          mobile:
            "../../src/assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg",
          tablet:
            "../../src/assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        },
      },
      product2: {
        pathName: "/cart/XX59",
        title: "XX59",
        images: {
          mobile:
            "../../src/assets/images/product-xx59-headphones/mobile/image-product1.jpg",
          tablet:
            "../../src/assets/images/product-xx59-headphones/tablet/image-product.jpg",
          desktop:
            "../../src/assets/images/product-xx59-headphones/desktop/image-product.jpg",
        },
      },
    },
  },

  // ... other properties
};
