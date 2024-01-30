import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AudioGearArticle from "./components/AudioGearArticle";
import Categories from "./components/Categories";

function Root() {
    const location = useLocation();
    return (
        <div>
            <Header />

            <Outlet />

            <div className=" container px-[5%] sm:px-[0]  sm:max-w-[90%] xl:max-w-[1110px] 2xl:max-w-[1300px]  mx-auto">
                {location.pathname !== "/" && <Categories />}
                <AudioGearArticle />
            </div>

            <Footer />
        </div>
    );
}

export default Root;
