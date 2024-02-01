// import React from 'react'
import { useLoaderData } from "react-router-dom";
import { Product } from "../App";
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
                    <div className="md:flex md:gap-[4%]">
                        <img
                            src={description.productMainImg.mobile}
                            className="rounded-[8px] w-[100%] h-[330px] object-cover md:hidden"
                            alt=""
                        />
                        <img
                            src={description.productMainImg.tablet}
                            alt=""
                            className="rounded-[8px] hidden md:block xl:hidden md:w-[48%]"
                        />
                        <img
                            src={description.productMainImg.desktop}
                            className="rounded-[8px] hidden xl:block"
                            alt=""
                        />
                        <div className="md:flex md:flex-col">
                            {" "}
                            <h4 className="text-buttonBackground my-[25px] text-[14px]">
                                {description.isNew}
                            </h4>
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
                    <div className="my-[48px]">
                        <h2 className="text-[28px] font-bold uppercase md:text-[32px]">feature</h2>
                        <p className="my-[32px] opacity-45 text-[15px]">
                            {description.features.part1}
                        </p>
                        <p className="my-[32px] opacity-45 text-[15px]"> {description.features.part2}</p>
                    </div>

                    <div>
                        <h2 className="text-[28px] font-bold">IN THE BOX</h2>
                        <h3>aq unda iyos ad...</h3>
                    </div>

                    <div className="flex flex-col gap-[20px] md:gap-[5%] md:flex-row">
                        <div className="flex flex-col gap-[20px] md:w-[35%]">
                            <img
                                className="rounded-[8px] w-[100%] md:max-w-[] h-[330px] md:h-[174px] object-cover "
                                src={description.productImages.image1}
                                alt=""
                            />
                            <img
                                className="rounded-[8px] w-[100%] h-[330px] object-cover md:h-[174px]"
                                src={description.productImages.image3}
                                alt=""
                            /></div>
                        <img
                            className="rounded-[8px] w-[100%] md:w-[60%] h-[368px] object-cover "
                            src={description.productImages.image2}
                            alt=""
                        />
                    </div>

                    <div className="mt-[100px]">
                        <h2 className="font-bold text-[28px] md:text-center">YOU MAY ALSO LIKE</h2>
                        <div className="flex flex-col gap-[40px] md:flex-row mt-[30px]">
                            <div className="md:w-[30%]">
                                <img
                                    className="rounded-[8px] w-[100%] md:h-[250px] md:hidden"
                                    src={description.relatedProducts.product1.images.mobile}
                                    alt=""
                                />
                                <img className="hidden md:block xl:hidden rounded-[8px] w-[100%] h-[320px]"
                                    src={description.relatedProducts.product1.images.tablet} alt="" />
                                <img className="hidden xl:block rounded-[8px] w-[100%] md:min-h-[320px]"
                                    src={description.relatedProducts.product1.images.desktop} alt="" />
                                <h2 className="text-center text-[28px] font-bold my-[20px] ">
                                    {description.relatedProducts.product1.title}
                                </h2>
                                <button className="bg-buttonBackground m-auto block">lm</button>
                            </div>
                            <div className="md:w-[30%]">
                                <img
                                    className="rounded-[8px] md:hidden"
                                    src={description.relatedProducts.product2.images.mobile}
                                    alt=""
                                />
                                <img className="hidden md:block  xl:hidden rounded-[8px] w-[100%] md:h-[320px]"
                                    src={description.relatedProducts.product2.images.tablet} alt="" />
                                <img className="hidden xl:block rounded-[8px] w-[100%] md:h-[320px]"
                                    src={description.relatedProducts.product2.images.desktop} alt="" />
                                <h2 className="text-center text-[28px] font-bold my-[20px]">
                                    {description.relatedProducts.product2.title}
                                </h2>
                                <button className="bg-buttonBackground m-auto block">lm</button>
                            </div>
                            <div className="md:w-[30%]">
                                <img
                                    className="rounded-[8px] md:hidden"
                                    src={description.relatedProducts.product3.images.mobile}
                                    alt=""
                                />
                                <img className="hidden md:block xl:hidden md:h-[320px] w-[100%] rounded-[8px]"
                                    src={description.relatedProducts.product3.images.tablet} alt="" />

                                <img className="hidden xl:block"
                                    src={description.relatedProducts.product3.images.desktop} alt="" />
                                <h2 className="text-center text-[28px] font-bold my-[20px]">
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
