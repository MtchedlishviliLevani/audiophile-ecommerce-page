import { useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../store";
import { selectTotalPrice } from "../features/cart/cartSlice";
import checkout from "../assets/images/checkout/icon-cash-on-delivery.svg"
import { useNavigate } from "react-router-dom";
import CheckoutPageModal from "../components/checkoutPage/CheckoutPageModal";

function CheckoutPage() {
    const cart = useSelector((state: rootState) => state.cart);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const validated = name && email && tel && address && zip && city && country;
    const [isValidated, setValdited] = useState(false)
    const navitagate = useNavigate()
    const [isActive, setIsActive] = useState(true);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <>
            <div className="xl:bg-gray mt-[90px]">
                {isValidated && <CheckoutPageModal />}
                <div className="container">
                    <section className="xl:py-[25px]" >
                        <h5 onClick={() => navitagate(-1)} className="opacity-45 text-[16px] my-[20px] xl:mb-[20px] cursor-pointer ">Go Back </h5>
                        <div className="xl:grid xl:grid-cols-[31%,31%,31%] xl:grid-rows-[auto,auto] xl:gap-[60px] xl:auto-rows-min ">
                            <form action="" className="xl:bg-secondaryBakcground rounded-[8px] p-[10px] col-start-1 col-end-3 row-start-1 row-end-3">
                                <h2 className="uppercase text-[28px] font-bold">checkout</h2>
                                <div>
                                    <h3 className="uppercase text-[13px] font-bold text-buttonBackground mt-[25px] mb-[15px]">
                                        billing details
                                    </h3>
                                    <div className="md:grid md:gap-[50px] md:grid-cols-2">
                                        <div >
                                            <label htmlFor="name" className="text-[12px] font-bold ">
                                                Name
                                            </label>
                                            <input
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                type="text"
                                                placeholder="Name"
                                                className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                            />
                                            {name == "" ? (
                                                <span className="text-[#FF0000] block text-end">
                                                    Required
                                                </span>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="text-[12px] font-bold ">
                                                EMAIL
                                            </label>
                                            <input
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="text"
                                                placeholder="alexei@mail.com"
                                                className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                            />
                                            {!email.includes("@") ? (
                                                <span className="text-[#FF0000] block text-end">
                                                    Required
                                                </span>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label htmlFor="tel" className="text-[12px] font-bold ">
                                                Phone number
                                            </label>
                                            <input
                                                onChange={(e) => setTel(e.target.value)}
                                                type="text"
                                                placeholder="+1 202-555-0136"
                                                className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                            />
                                            {!/\d/.test(tel) ? (
                                                <span className="text-[#FF0000] block text-end">
                                                    Required
                                                </span>
                                            ) : null}
                                        </div></div>
                                </div>
                                <div>
                                    <h3 className="uppercase text-[13px] font-bold text-buttonBackground mt-[25px]">
                                        shipping info
                                    </h3>

                                    <div>
                                        <label htmlFor="address" className="text-[12px] font-bold ">
                                            YOUR ADDRESS
                                        </label>
                                        <input
                                            onChange={(e) => setAddress(e.target.value)}
                                            type="text"
                                            placeholder="1137 Williams Avenue"
                                            className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                        />
                                        {!/[a-zA-Z]/.test(address) ? (
                                            <span className="text-[#FF0000] block text-end">
                                                Required
                                            </span>
                                        ) : null}
                                    </div><div className="md:grid md:gap-[50px] md:grid-cols-2">
                                        <div>
                                            <label htmlFor="zip" className="text-[12px] font-bold ">
                                                Zip code
                                            </label>
                                            <input
                                                onChange={(e) => setZip(e.target.value)}
                                                type="text"
                                                placeholder="10001"
                                                className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                            />
                                            {!/\d/.test(zip) ? (
                                                <span className="text-[#FF0000] block text-end">
                                                    Required
                                                </span>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label htmlFor="address" className="text-[12px] font-bold ">
                                                ADDRESS
                                            </label>
                                            <input
                                                onChange={(e) => setCity(e.target.value)}
                                                type="text"
                                                placeholder="New York"
                                                className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                            />
                                            {!/[a-zA-Z]/.test(city) ? (
                                                <span className="text-[#FF0000] block text-end">
                                                    Required
                                                </span>
                                            ) : null}
                                        </div></div>
                                    <div>
                                        <label htmlFor="" className="text-[12px] font-bold ">
                                            COUNTRY
                                        </label>
                                        <input
                                            onChange={(e) => setCountry(e.target.value)}
                                            type="text"
                                            placeholder="UNITED STATES"
                                            className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                        />
                                        {!/[a-zA-Z]/.test(country) ? (
                                            <span className="text-[#FF0000] block text-end">
                                                Required
                                            </span>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="my-[30px]">
                                    <h3 className="uppercase text-[13px] font-bold text-buttonBackground mt-[25px]">
                                        payment details
                                    </h3>
                                    <div className="md:flex md:justify-between md:mt-[30px]">
                                        <h3 className="font-bold uppercase my-[25px] md:my-[initial]">
                                            payment method
                                        </h3>
                                        <div className=" ">
                                            <div
                                                className={`pl-[10px] rounded-[8px] border border-solid  border-1 ${isActive ? "border-[#D87D4A]" : ""
                                                    } border-[#cfcfcf]   w-[100%] md:min-w-[309px]`}
                                            >
                                                <label
                                                    htmlFor="yourInputId"
                                                    className="py-[17.5px] pl-[50px] font-bold relative   text-[14px] placeholder:font-monrope block "
                                                >
                                                    e-Money
                                                    <input
                                                        type="radio"
                                                        onChange={() => setIsActive(true)}
                                                        checked={isActive}
                                                        className="absolute opacity-0 left-[19px]  top-[15px] opacity- z-10 cursor-pointer"
                                                    />
                                                    <span
                                                        className={`absolute top-[50%] left-[15px] translate-y-[-50%] w-[1.25rem] h-[1.25rem] border border-solid  border-1 border-[#cfcfcf] rounded-[50%] before:content-[""] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-[10px] before:h-[10px] before:rounded-[50%] before:block ${isActive ? "before:bg-buttonBackground" : ""
                                                            }`}
                                                    ></span>
                                                </label>
                                            </div>
                                            <div
                                                className={` mt-[30px] pl-[10px]  rounded-[8px] border border-solid border-1  w-[100%] border-[#cfcfcf] ${!isActive ? "border-[#D87D4A]" : ""
                                                    }`}
                                            >
                                                <label
                                                    htmlFor="yourInputId"
                                                    className="py-[17.5px] pl-[50px] relative font-bold   text-[14px] block"
                                                >
                                                    Cash on Delivery
                                                    <input
                                                        type="radio"
                                                        onChange={() => setIsActive(false)}
                                                        checked={!isActive}
                                                        className="absolute opacity-0 top-[19px] left-[15px] z-10 cursor-pointer "
                                                    />
                                                    <span
                                                        className={`absolute top-[50%] left-[15px] translate-y-[-50%]  w-[1.25rem] h-[1.25rem] border border-solid border-1 border-[#cfcfcf] rounded-[50%] before:content-[""] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-[10px] before:h-[10px] before:rounded-[50%] before:block ${!isActive ? "before:bg-buttonBackground" : ""
                                                            }`}
                                                    ></span>
                                                </label>
                                            </div>
                                        </div></div>

                                    <div className="my-[20px]">

                                        {isActive ? (
                                            <div className="md:grid md:grid-cols-2 md:gap-[30px]">
                                                <div>
                                                    <label className="text-[12px] font-bold">
                                                        e-Money Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="238521993"
                                                        className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                                    /></div>
                                                <div>
                                                    <div className="mt-[15px] md:mt-[initial]">
                                                        <label className="text-[12px] font-bold">e-Money Pin</label>
                                                        <input
                                                            type="text"
                                                            placeholder="6891"
                                                            className="border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]"
                                                        />
                                                    </div></div>
                                            </div>
                                        ) : (
                                            <div className="my-[40px] flex flex-col gap-[20px]"><img src={checkout} className="block m-auto" alt="" />
                                                <p className="opacity-45">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p></div>
                                        )}

                                    </div>
                                </div>
                            </form>
                            <div className="my-[30px] xl:my-[initial] xl:bg-secondaryBakcground rounded-[8px] p-[10px]">
                                <h2 className="uppercase font-bold text-[28px]">summary</h2>
                                <div className="mt-[25px]">
                                    {cart.productInfo.map((value, i) => (
                                        <div key={i}>
                                            <div className="flex items-center justify-between mt-[15px] relative">
                                                {" "}
                                                <img className="w-[64px]" src={value?.imgSrc} />
                                                <div className="flex flex-col justify-center  absolute translate-x-[-50%] translate-y-[-50%] left-[140px] top-[50%]">
                                                    <h2 className="font-bold text-[15px]">{value?.title}</h2>
                                                    <span className="block opacity-45 text-[15px] font-bold">
                                                        ${value?.price}
                                                    </span>
                                                </div>
                                                <p className="font-bold opacity-45">x{value?.finalItem}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex flex-col gap-[8px] my-[35px]">
                                        <div className="flex justify-between">
                                            <h3 className="opacity-45 uppercase text-[15px]">total</h3>{" "}
                                            <small className="text-[18px] font-bold">
                                                $ {totalPrice.toLocaleString()}
                                            </small>
                                        </div>
                                        <div className="flex justify-between">
                                            <h3 className="opacity-45 uppercase text-[15px]">shipping</h3>{" "}
                                            <small className="text-[18px] font-bold">$ 50</small>
                                        </div>
                                        <div className="flex justify-between">
                                            <h3 className="opacity-45 uppercase text-[15px]">
                                                VAT (INCLUDED)
                                            </h3>{" "}
                                            <small className="text-[18px] font-bold">
                                                $ {(totalPrice / 5).toLocaleString()}
                                            </small>
                                        </div>
                                        <div className="flex justify-between">
                                            <h3 className="opacity-45 uppercase text-[15px] ">
                                                GRAND TOTAL
                                            </h3>{" "}
                                            <small className="text-[18px] font-bold text-buttonBackground">
                                                $ {(totalPrice + 50).toLocaleString()}
                                            </small>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (validated) {
                                                setValdited(true)
                                            }
                                        }}
                                        className="mt-[30px] bg-buttonBackground py-[12px] px-[25px] w-[100%] text-secondaryText">
                                        CONTINUE & PAY
                                    </button>
                                </div>
                            </div></div>

                    </section>
                </div></div>

        </>
    );
}

export default CheckoutPage;
