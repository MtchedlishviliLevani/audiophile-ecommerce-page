import { useSelector } from "react-redux";
import checkout from "../../assets/images/checkout/icon-order-confirmation.svg";
import { rootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { selectTotalPrice } from "../../features/cart/cartSlice";
import { useState } from "react";
function CheckoutPageModal() {
    const navigate = useNavigate()
    const products = useSelector((state: rootState) => state.cart);
    const [showAllItems, setShowAllItems] = useState(false);
    const toggleItemsVisibility = () => {
        setShowAllItems(!showAllItems);
    };
    const totalPrice = useSelector(selectTotalPrice)
    console.log(products.length)
    return (
        <>
            <div className="w-[100%] fixed bg-primaryBackground opacity-50 h-[100%] z-40"></div>
            <div className="p-[30px] md:py-[50px] rounded-[8px] bg-secondaryBakcground max-w-[327px] w-[90%] md:max-w-[540px] top-[50%] fixed translate-y-[-50%] translate-x-[-50%] z-50 left-[50%]">
                <img src={checkout} alt="" />
                <h2 className="text-[24px] font-bold my-[25px] md:text-[32px] ">
                    THANK YOU FOR YOUR ORDER
                </h2>
                <p className="text-[15px] opacity-45">
                    You will receive an email confirmation shortly.
                </p>

                <div className="my-[20px]">
                    <div className="md:flex">
                        <div className="bg-gray p-[20px] rounded-l-lg md:w-[60%]">
                            {products.slice(0, 1).map((value, i) => (
                                <div key={i} className="flex justify-between ">
                                    <img className="w-[50px] " src={value.imgSrc} alt="" />
                                    <div className="flex flex-col justify-center ml-[-40px]">
                                        <h2 className="font-bold text-[15px]">{value.title}</h2>
                                        <small className="font-bold text-[14px] text-[#0000005a]">$ {value.price}</small>
                                    </div>
                                    <small className="text-[15px] font-bold text-[#0000005a]">x{value.finalItem}</small>
                                </div>
                            ))}

                            {products.length > 1 && (
                                <>

                                    {showAllItems && (
                                        <>
                                            {products.slice(1).map((value, i) => (
                                                <div key={i} className="flex justify-between ">
                                                    <img className="w-[50px] " src={value.imgSrc} alt="" />
                                                    <div className="flex flex-col justify-center ml-[-40px]">
                                                        <h2 className="font-bold text-[15px]">{value.title}</h2>
                                                        <small className="font-bold text-[14px] text-[#0000005a]">$ {value.price}</small>
                                                    </div>
                                                    <small className="text-[15px] font-bold text-[#0000005a]">x{value.finalItem}</small>
                                                </div>
                                            ))}

                                        </>
                                    )}
                                    <>
                                        <div className="line my-[10px]"></div>
                                        <p onClick={toggleItemsVisibility} className="text-center text-[12px] font-bold text-[#0000005a]">
                                            {showAllItems ? 'Hide' : 'Show'} {products.length - 1} other item(s)
                                        </p>
                                    </>
                                </>
                            )}
                        </div>
                        <div className="bg-primaryBackground pl-[20px] py-[25px] rounded-r-lg flex flex-col md:justify-end gap-[10px] md:w-[40%]">
                            <h4 className="uppercase opacity-50  text-secondaryText">grand total</h4>
                            <small className="text-[18px] font-bold text-secondaryText">${totalPrice}</small>
                        </div></div>
                    <button onClick={() => navigate("/")} className="bg-buttonBackground w-[100%] md:mt-[45px] text-secondaryText py-[12px] mt-[15px]">BACK TO HOME</button>
                </div>
            </div>
        </>
    );
}

export default CheckoutPageModal;
