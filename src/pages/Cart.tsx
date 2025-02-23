import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Product } from "../data";
import scrollUpFn from "../helper/scrollUp";
import { useSelector } from "react-redux";
import { rootState } from "../store";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCounter, increaseCounter, resetCounter } from "../features/cart/cartSlice";

function Cart() {
    const amountItems = useSelector((state: rootState) => state.cart?.counter);

    const handleAddToCart = (id: number, price: number, finalItem: number, imgSrc: string, title: string) => {
        dispatch(addToCart({ id, price, finalItem, imgSrc, title }));
        dispatch(resetCounter())
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const backPrvsPage = () => {
        navigate(-1)
    }
    const description = useLoaderData() as Product;


    return (
        <div className="container">
            <div className="mt-[130px]">
                <span onClick={backPrvsPage} className="text-[15px] opacity-45 cursor-pointer">Go Back</span>
                <div className="mt-[30px] ">
                    <div className="md:flex md:gap-[10%]">

                        <picture>
                            <source srcSet={description.productMainImg.desktop} media="(min-width:1100px)" />
                            <source srcSet={description.productMainImg.tablet} media="(min-width:768px)" />
                            <img loading="lazy"
                                className="rounded-[8px]  w-[100%] md:min-w-[300px]"
                                src={description.productMainImg.mobile} alt="" />
                        </picture>



                        <div className="md:flex md:flex-col">
                            {description.isNew ? <h4 className="text-buttonBackground my-[25px] text-[14px]">
                                {description.isNew}
                            </h4> : null}

                            <h2 className="text-[28px] font-bold mt-[10px]">{description.title}</h2>
                            <p className="my-[32px] opacity-50">{description.paragraph}</p>
                            <small className="text-[18px] font-bold">
                                $ {description.price}
                            </small>
                            <div className="flex gap-[30px] items-center mt-[25px]">
                                <div className="flex bg-gray py-[7px]">
                                    <button onClick={() => dispatch(decreaseCounter())} className="w-[70px] opacity-45">-</button>
                                    <span className="text-[22px] font-bold">{amountItems}</span>
                                    <button onClick={() => dispatch(increaseCounter())} className="w-[70px] opacity-45">+</button>
                                </div>
                                <button onClick={() => handleAddToCart(description.productId, description.price, 0 + amountItems, description.productMainImg.mobile, description.shortTitle)} className="bg-buttonBackground hover:bg-buttonBackgroundHoverOrange p-[15px] text-[13px] font-bold px-[35px] text-secondaryText">
                                    ADD TO CART
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
                                <picture>
                                    <source srcSet={description.relatedProducts.product1.images.desktop} media="(min-width:1100px)" />
                                    <source srcSet={description.relatedProducts.product1.images.tablet} media="(min-width:768px)" />
                                    <img className="rounded-[8px]"
                                        loading="lazy"
                                        src={description.relatedProducts.product1.images.mobile}
                                        alt=""
                                    />
                                </picture>
                                <h2 className="text-center text-[28px] font-bold my-[20px] ">
                                    {description.relatedProducts.product1.title}
                                </h2>
                                <Link to={description.relatedProducts.product1.pathName}>
                                    <button onClick={scrollUpFn} className="bg-buttonBackground hover:bg-buttonBackgroundHoverOrange  text-secondaryText text-[13px] px-[31px] py-[15px] max-w-[160px] block m-auto">SEE PRODUCT</button></Link>
                            </div>
                            <div className="md:w-[30%]">
                                <picture>
                                    <source srcSet={description.relatedProducts.product2.images.desktop} media="(min-width:1100px)" />
                                    <source srcSet={description.relatedProducts.product2.images.tablet} media="(min-width:768px)" />
                                    <img className="rounded-[8px]"
                                        loading="lazy"
                                        src={description.relatedProducts.product2.images.mobile}
                                        alt=""
                                    />
                                </picture>
                                <h2 className="text-center text-[28px] font-bold my-[20px]">
                                    {description.relatedProducts.product2.title}
                                </h2>
                                <Link to={description.relatedProducts.product2.pathName}>
                                    <button onClick={scrollUpFn} className="bg-buttonBackground hover:bg-buttonBackgroundHoverOrange   text-secondaryText text-[13px] px-[31px] py-[15px] max-w-[160px] block m-auto">SEE PRODUCT</button></Link>
                            </div>
                            <div className="md:w-[30%]">
                                <picture>
                                    <source srcSet={description.relatedProducts.product3.images.desktop} media="(min-width:1100px)" />
                                    <source srcSet={description.relatedProducts.product3.images.tablet} media="(min-width:768px)" />
                                    <img className="rounded-[8px]"
                                        loading="lazy"
                                        src={description.relatedProducts.product3.images.mobile}
                                        alt=""
                                    />
                                </picture>
                                <h2 className="text-center text-[28px] font-bold my-[20px] ">
                                    {description.relatedProducts.product3.title}
                                </h2>
                                <Link to={description.relatedProducts.product3.pathName}><button onClick={scrollUpFn} className="bg-buttonBackground hover:bg-buttonBackgroundHoverOrange  text-secondaryText text-[13px] px-[31px] py-[15px] max-w-[160px] block m-auto">SEE PRODUCT</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Cart;
