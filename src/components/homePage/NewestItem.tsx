// import productImg from "../../src/assets/images/home/desktop/image-hero.jpg";

import Button from "../Button";

// import productImgDesktop from "../../assets/images/home/desktop/image-hero.jpg";
// import productImgTablet from "../../assets/images/home/tablet/image-header.jpg";
// import proudctImgMobile from "../../assets/images/home/mobile/image-header.jpg";
function NewestItem() {
    // const getBackgroundImage = () => {
    //     const width = window.innerWidth;
    //     if (width < 768) {
    //         return `url(${proudctImgMobile})`
    //     }
    // }

    return (

        <section
            className={`bg-[url("../../src/assets/images/home/mobile/image-header.jpg")] sm:bg-[url("../../src/assets/images/home/tablet/image-header.jpg")]  xl:bg-[url("../../src/assets/images/home/desktop/image-hero.jpg")] bg-[length:100%_100%] bg-no-repeat bg-[center_top_-75px]  w-[100%] h-[37.5rem]`}
        >
            <div className="container max-w-[100%] px-[5%]">
                <div className="pt-[108px]">
                    <h4 className="text-secondaryText opacity-45 text-[14px] text-center">NEW PRODUCT</h4>
                    <h2 className="text-secondaryText text-[36px] font-bold uppercase tracking-[1.25px] text-center mt-4 mb-6">XX99 Mark II
                        HeadphoneS</h2>
                    <p className="text-secondaryText opacity-45 text-[15px] text-center mb-[28px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                    <Button >See Products</Button>
                </div></div>
        </section>
    );
}

export default NewestItem;
