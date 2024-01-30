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
            className={`bg-[url("../../src/assets/images/home/mobile/image-header.jpg")] sm:bg-[url("../../src/assets/images/home/tablet/image-header.jpg")]  xl:bg-[url("../../src/assets/images/home/desktop/image-hero.jpg")] bg-[length:100%_100%] bg-no-repeat bg-[center_top_-75px]  w-[100%] h-[37.5rem]  xl:h-[45rem]`}
        >
            <div className="container max-w-[100%] px-[5%] sm:p-[0%] sm:max-w-[88%] xl:max-w-[1110px]">
                <div className="pt-[108px] xl:pt-[145px] md:max-w-[430px] md:w-[100%] md:m-auto xl:m-[initial]">
                    <h4 className="text-secondaryText opacity-45 text-[14px] text-center xl:text-left">NEW PRODUCT</h4>
                    <h2 className="text-secondaryText text-[36px] md:text-[56px] leading-[58px] font-bold uppercase tracking-[1.25px] text-center xl:text-left mt-4 mb-6">XX99 Mark II
                        HeadphoneS</h2>
                    <p className="text-secondaryText opacity-45 text-[15px] text-center xl:text-left mb-[28px] xl:mb-[40px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                    <Button >See Products</Button>
                </div></div>
        </section>
    );
}

export default NewestItem;
