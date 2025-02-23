import { rootState } from "../../store";
import { useSelector } from "react-redux";
import { decreaseFinalItem, increaseFinalItem, resetCart } from "./cartSlice";
import { useDispatch } from "react-redux";
import { selectTotalPrice } from "./cartSlice";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useCallback } from "react";

function ShoppingCart({ setIsShown }: { setIsShown: React.Dispatch<React.SetStateAction<boolean>> }) {
    const totalAmount = useSelector(selectTotalPrice);
    const amountItems1 = useSelector((state: rootState) => state.cart);

    const dispatch = useDispatch();
    // Close modal when clicking outside
    const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).id === "cart-overlay") setIsShown(false);
    }, [setIsShown]);
    return createPortal(
        <>
            <div id="cart-overlay" onClick={handleOverlayClick} className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="max-w-[377px] w-[90%] rounded-[8px] py-[30px] px-[15px]  translate-x-[-50%] translate-y-[-50%] left-[50%] md:left-[75%] top-[35%] bg-secondaryBakcground fixed z-[80] ">
                    <div className="flex justify-between">
                        <h4 className="text-[18px] font-bold">CART ({amountItems1.productInfo.length})</h4>
                        <h4 className="text-[15px] opacity-45 underline" onClick={() => dispatch(resetCart())}>Remove all</h4>
                    </div>
                    {amountItems1.productInfo.map((value, i) => <div key={i} className="mt-[40px] flex justify-between items-center">
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
                        <span className="font-bold">$ {totalAmount.toLocaleString()}</span>
                    </div>
                    <Link onClick={() => setIsShown(false)} to="/checkout"><button className="bg-buttonBackground block w-[100%] py-[20px] text-secondaryText text-[13px] font-bold uppercase">checkout</button></Link>
                </div></div>
        </>, document.getElementById("cart") as HTMLElement
    )
}

export default ShoppingCart;
