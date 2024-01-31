// import React from "react";
import data from "../../data";
import Button from "../Button";
// import earphonePhoto from "../../assets/images/";
// import headPhoneMarkIIMob from "../../assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg";
// import headTab from "../../assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg";
// import headTab from "../../assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg";
// import f from "../../assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg";
// import fx from "../../assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg";
// import a from "../../assets/images/product-xx59-headphones/mobile/image-product.jpg";
// import b from "../../assets/images/product-xx59-headphones/tablet/image-product.jpg";
// import c from "../../assets/images/product-xx59-headphones/desktop/image-product.jpg";
function Headphone() {
    // const title = "XX99 Mark I Headphones"
    return (
        <section className="pb-[80px]">
            {data.map((value, i) => (
                <div key={i} className={`grid grid-cols-1   gap-[20px] lg:gap-[100px] mt-[120px] lg:grid-cols-2 `}>
                    <img src={value.image.mobile} className="md:hidden rounded-[8px] w-[100%] max-h-[350px] sm:max-h-[400px] sm:object-cover sm:aspect-video" />
                    <img src={value.image.tablet} className="hidden md:block lg:hidden rounded-[8px] md:h-[452px] md:w-[100%] object-cover" />
                    <img src={value.image.desktop} className="hidden lg:block rounded-[8px] lg:h-[560px]" />
                    <div className={`lg:flex flex-col justify-center  ${i === 1 ? "lg:order-[-1]" : ""}`}>
                        {value.category ? <h4 className="text-[#D87D4A] text-[14px] text-center lg:text-left my-[32px] lg:my-6 ">{value.category}</h4> : null}
                        <h2 className="text-[32px] lg:text-[40px] lg:tracking-[1.4px] font-bold leading-9 lg:leading-[44px] text-center lg:text-left">{value.title}</h2>
                        <p className="text-center lg:text-left my-[24px] opacity-45">{value.paragraph}</p>
                        <Button color="buttonBackground" hoverBg="" position="initial" />
                    </div>
                </div>
            ))}
            <div></div>
        </section>
    );
}

export default Headphone;
