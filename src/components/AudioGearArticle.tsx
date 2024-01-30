import mainPhotoImgTablet from "../assets/images/shared/tablet/image-best-gear.jpg";
import mainPhotoImgDesktop from "../assets/images/shared/mobile/image-best-gear.jpg";
import mainPhotoImgMobile from "../assets/images/shared/desktop/image-best-gear.jpg";

function AudioGearArticle() {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 mb-5">
            <div className="lg:order-1 ">
                <img src={mainPhotoImgMobile} alt="" className="md:hidden rounded-[8px] w-[100%] h-[300px] sm:h-[450px] sm:m-auto object-cover" />
                <img
                    src={mainPhotoImgTablet}
                    alt=""
                    className="hidden md:block lg:hidden rounded-[10px]"
                />
                <img src={mainPhotoImgDesktop} alt="" className="hidden lg:block rounded-[10px]" /></div>
            <div className="lg:flex lg:flex-col lg:justify-center">
                <h2 className="mt-[64px] md:mt-[32px] lg:mt-[initial] mb-[32px] font-bold text-[40px] uppercase text-center lg:text-left leading-[44px]">Bringing you the <small className="text-[#D87D4A] text-[40px]">best</small> audio gear</h2>
                <p className="text-[15px opacity-50 text-center lg:text-left">
                    Located at the heart of New York City, Audiophile is the premier store
                    for high end headphones, earphones, speakers, and audio accessories.
                    We have a large showroom and luxury demonstration rooms available for
                    you to browse and experience a wide range of our products. Stop by our
                    store to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
        </div>
    );
}

export default AudioGearArticle;
