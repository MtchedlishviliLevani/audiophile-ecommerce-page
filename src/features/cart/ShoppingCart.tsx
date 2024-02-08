// import { useSelector } from "react-redux";
// import { addToCart } from "./cartSlice";
import { rootState } from "../../store";
import { useSelector } from "react-redux";
import { decreaseFinalItem, increaseFinalItem, resetList } from "./cartSlice";
import { useDispatch } from "react-redux";
import { selectTotalPrice } from "./cartSlice";
import close from "../../assets/images/checkout/closeIcon.svg"
import { useState } from "react";
import { Link } from "react-router-dom";
function ShoppingCart({ setIsShown }: { setIsShown: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [hidden, setHidden] = useState(true)
    const totalAmount = useSelector(selectTotalPrice);
    const amountItems1 = useSelector((state: rootState) => state.cart);
    const handleClose = () => {
        setHidden(false)
        setIsShown(false)

    }
    const dispatch = useDispatch();
    return (
        <>{hidden && (
            <div className="max-w-[377px] w-[90%] rounded-[8px] py-[30px] px-[15px]  translate-x-[-50%] translate-y-[-50%] left-[50%] md:left-[75%] top-[35%] bg-secondaryBakcground absolute z-[80] ">
                <img src={close} onClick={() => handleClose()} className="absolute left-[93%] top-[1%] cursor-pointer" alt="" />
                <div className="flex justify-between">
                    <h4 className="text-[18px] font-bold">CART ({amountItems1.length})</h4>
                    <h5
                        className="text-[15px] opacity-45 underline"
                        onClick={() => dispatch(resetList())}
                    >
                        Remove all
                    </h5>
                </div>
                {/* {amountItems1.map((price) => <h1>{price?.finalItem}</h1>)} */}
                {amountItems1.map((value, i) => <div key={i} className="mt-[40px] flex justify-between items-center">
                    <img src={value?.imgSrc} className="w-[64px] rounded-xl" alt="" />
                    <div className="flex flex-col gap-1 ml-[-50px]">
                        <h5 className="font-bold text-[15px]">{value?.title}</h5>
                        <h5 className="opacity-45 text-[15px] font-bold">$ {value?.price.toLocaleString()}</h5>
                    </div>

                    <div className="flex bg-gray py-[7px] px-[13px] justify-between">
                        <button onClick={() => dispatch(decreaseFinalItem(value.id))} className="w-[30px] opacity-45">-</button>
                        <div>
                            <span className="font-bold ">{value?.finalItem}</span>
                        </div>
                        <button onClick={() => dispatch(increaseFinalItem(value.id))} className="w-[30px] opacity-45">+</button>
                    </div>
                </div>)}

                <div className="my-[30px] flex justify-between">
                    <h2 className="text-[15px] opacity-45 uppercase leading-[24px]">total</h2>
                    <span className="font-bold">{totalAmount.toLocaleString()}</span>
                </div>
                <Link onClick={() => setIsShown(false)} to="/checkout"><button className="bg-buttonBackground block w-[100%] py-[20px] text-secondaryText text-[13px] font-bold uppercase">checkout</button></Link>
            </div>)}
        </>
    );
}

export default ShoppingCart;
