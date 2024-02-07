import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AudioGearArticle from "./components/AudioGearArticle";
import Categories from "./components/Categories";
import ShoppingCart from "./features/cart/ShoppingCart";
import { useState } from "react";

function Root() {
    const location = useLocation();
    const [isShown, setIsShown] = useState<boolean>(false);

    return (
        <div >
            {isShown && (<div
                className={`w-[100%] h-[200vh]  left-[0] top-[0%] bg-[rgba(0,0,0,0.5)] fixed z-[30]
                    `}
            ></div>)}

            <Header onIsShown={setIsShown} isShown={isShown} />

            {isShown && <ShoppingCart setIsShown={setIsShown} />}
            <Outlet />

            <div className={` ${isShown && "opacity-45"} container px-[5%] sm:px-[0]  sm:max-w-[90%] xl:max-w-[1110px] 2xl:max-w-[1300px]  mx-auto`}>
                {location.pathname !== "/checkout" && "/" && <Categories />}
                {location.pathname !== "/checkout" && <AudioGearArticle />}
            </div>

            <Footer />
        </div>
    );
}

export default Root;
