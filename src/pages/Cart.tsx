// import React from 'react'
import { useLoaderData } from "react-router-dom";
// import { Product } from "../App";
import { Product } from "../data";
import Container from "../components/Container";
// import { HeadphonePageContentType } from '../App';
// import { productContant } from '../data';
function Cart() {
    const description = useLoaderData() as Product;
    console.log(description);
    console.log(description);
    return (
        <Container>
            <div className="mt-[30px]">
                <span className="text-[15px] opacity-45">Go Back</span>
                <div className="mt-[30px] ">
                    <div className="md:flex md:gap-[10%]">
                        <img loading="lazy"
                            src={description.productMainImg.mobile}
                            className="rounded-[8px] w-[100%] h-[330px] object-cover md:hidden"
                            alt="product main image"
                        />
                        <img loading="lazy"
                            src={description.productMainImg.tablet}
                            alt="product main image"
                            className="rounded-[8px] hidden md:block xl:hidden md:w-[48%] h-[480px]"
                        />
                        <img loading="lazy"
                            src={description.productMainImg.desktop}
                            className="rounded-[8px] hidden xl:block w-[48%]"
                            alt="product main image"
                        />
                        <div className="md:flex md:flex-col">
                            {description.isNew ? <h4 className="text-buttonBackground my-[25px] text-[14px]">
                                {description.isNew}
                            </h4> : null}

                            <h2 className="text-[28px] font-bold">{description.title}</h2>
                            <p className="my-[32px] opacity-50">{description.paragraph}</p>
                            <small className="text-[18px] font-bold">
                                $ {description.price}
                            </small>
                            <div>
                                <button className="bg-buttonBackground p-[15px] text-[20px]">
                                    see pro
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex gap-[50px]">
                        <div className="my-[48px]">
                            <h2 className="text-[28px] font-bold uppercase md:text-[32px]">feature</h2>
                            <p className="my-[32px] opacity-45 text-[15px]">
                                {description.features.part1}
                            </p>
                            <p className="my-[32px] opacity-45 text-[15px]"> {description.features.part2}</p>
                        </div>

                        <div className="md:flex md:justify-between md:my-[100px] lg:flex-col lg:w-[100%]">
                            <h2 className="text-[28px] font-bold">IN THE BOX</h2>
                            <div className="my-[30px] flex flex-col gap-1">
                                <div className="flex gap-2"><span className="text-[15px] text-buttonBackground font-bold">{description.inTheBox?.amounts.amount1}</span>
                                    <h5 className="text-[15px] opacity-45">{description.inTheBox?.contents.content1}</h5>
                                </div>
                                <div className="flex gap-2"><span className="text-[15px] text-buttonBackground font-bold">{description.inTheBox?.amounts.amount2}</span>
                                    <h5 className="text-[15px] opacity-45">{description.inTheBox?.contents.content2}</h5>
                                </div>
                                <div className="flex gap-2"><span className="text-[15px] text-buttonBackground font-bold">{description.inTheBox?.amounts.amount3}</span>
                                    <h5 className="text-[15px] opacity-45">{description.inTheBox?.contents.content3}</h5>
                                </div>
                                <div className="flex gap-2"><span className="text-[15px] text-buttonBackground font-bold">{description.inTheBox?.amounts.amount4}</span>
                                    <h5 className="text-[15px] opacity-45">{description.inTheBox?.contents.content4}</h5>
                                </div>
                                {description.inTheBox?.amounts.amount5 && <div className="flex gap-2"><span className="text-[15px] text-buttonBackground font-bold">{description.inTheBox?.amounts.amount5}</span>
                                    <h5 className="text-[15px] opacity-45">{description.inTheBox?.contents.content5}</h5>
                                </div>}
                                {description.inTheBox?.amounts.amount6 && <div className="flex gap-2"><span className="text-[15px] text-buttonBackground font-bold">{description.inTheBox?.amounts.amount6}</span>
                                    <h5 className="text-[15px] opacity-45">{description.inTheBox?.contents.content6}</h5>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] md:gap-[5%] md:flex-row">
                        <div className="flex flex-col gap-[20px] md:w-[35%]">
                            <img loading="lazy"
                                className="rounded-[8px] w-[100%] md:max-w-[] h-[330px] md:h-[174px] object-cover "
                                src={description.productImages.image1}
                                alt="general product image1"
                            />
                            <img loading="lazy"
                                className="rounded-[8px] w-[100%] h-[330px] object-cover md:h-[174px]"
                                src={description.productImages.image3}
                                alt="general product image2"
                            /></div>
                        <img loading="lazy"
                            className="rounded-[8px] w-[100%] md:w-[60%] h-[368px] object-cover "
                            src={description.productImages.image2}
                            alt="general product image3"
                        />
                    </div>

                    <div className="mt-[100px]">
                        <h2 className="font-bold text-[28px] md:text-center">YOU MAY ALSO LIKE</h2>
                        <div className="flex flex-col gap-[40px] md:flex-row mt-[30px]">
                            <div className="md:w-[30%]">
                                <img loading="lazy"
                                    className="rounded-[8px] h-[200px] m-auto md:h-[250px] md:hidden"
                                    src={description.relatedProducts.product1.images.mobile}
                                    alt="product1 image"
                                />
                                <img loading="lazy" className="hidden md:block lg:hidden rounded-[8px] w-[100%] h-[320px]"
                                    src={description.relatedProducts.product1.images.tablet} alt="product1 image" />
                                <img loading="lazy" className="hidden lg:block rounded-[8px] w-[100%] md:min-h-[320px]"
                                    src={description.relatedProducts.product1.images.desktop} alt="product1 image" />
                                <h2 className="text-center text-[28px] font-bold my-[20px] ">
                                    {description.relatedProducts.product1.title}
                                </h2>
                                <button className="bg-buttonBackground m-auto block">lm</button>
                            </div>
                            <div className="md:w-[30%]">
                                <img loading="lazy"
                                    className="rounded-[8px] m-auto md:hidden h-[200px]"
                                    src={description.relatedProducts.product2.images.mobile}
                                    alt="product2 image"

                                />
                                <img loading="lazy" className="hidden md:block  lg:hidden rounded-[8px] w-[100%] h-[320px]"
                                    src={description.relatedProducts.product2.images.tablet} alt="product2 image" />
                                <img loading="lazy" className="hidden lg:block rounded-[8px] w-[100%] min-h-[320px]"
                                    src={description.relatedProducts.product2.images.desktop} alt="product2 image" />
                                <h2 className="text-center text-[28px] font-bold my-[20px]">
                                    {description.relatedProducts.product2.title}
                                </h2>
                                <button className="bg-buttonBackground m-auto block">lm</button>
                            </div>
                            <div className="md:w-[30%]">
                                <img loading="lazy"
                                    className="rounded-[8px] md:hidden m-auto h-[200px]"
                                    src={description.relatedProducts.product3.images.mobile}
                                    alt="product2 image"
                                />
                                <img loading="lazy" className="hidden md:block lg:hidden md:h-[320px] w-[100%] rounded-[8px]"
                                    src={description.relatedProducts.product3.images.tablet} alt="product3 image" />

                                <img loading="lazy" className="hidden lg:block min-h-[320px]"
                                    src={description.relatedProducts.product3.images.desktop} alt="product3 image" />
                                <h2 className="text-center text-[28px] font-bold my-[20px] ">
                                    {description.relatedProducts.product3.title}
                                </h2>
                                <button className="bg-buttonBackground m-auto block">lm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Cart;
