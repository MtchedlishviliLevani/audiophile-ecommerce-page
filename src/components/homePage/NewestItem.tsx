import { Link } from "react-router-dom";
import Button from "../Button";
import { motion } from "framer-motion"

function NewestItem() {
    return (
        <section
            className={`bg-[url("/images/home/mobile/image-header.jpg")] sm:bg-[url("/images/home/tablet/image-header.jpg")]  xl:bg-[url("/images/home/desktop/image-hero.jpg")] bg-[length:100%_100%] bg-no-repeat bg-[center_top_-20px]   w-[100%] h-[37.5rem]  xl:h-[45rem]`}
        >
            <div className="container">
                <div className="pt-[108px] xl:pt-[145px] md:max-w-[430px] md:w-[100%] md:m-auto xl:m-[initial]">
                    <h4 className="text-secondaryText opacity-45 text-[14px] text-center xl:text-left">
                        NEW PRODUCT
                    </h4>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-secondaryText text-[36px] md:text-[56px] leading-[58px] font-bold uppercase tracking-[1.25px] text-center xl:text-left mt-4 mb-6">
                        XX99 Mark II HeadphoneS
                    </motion.h2>
                    <p className="text-secondaryText opacity-45 text-[15px] text-center xl:text-left mb-[28px] xl:mb-[40px]">
                        Experience natural, lifelike audio and exceptional build quality
                        made for the passionate music enthusiast.
                    </p>

                    <Link to="/cart/XX99MARKII">
                        <motion.div
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1 }}>
                            <Button
                                color="buttonBackground"
                                hoverBg="buttonBackgroundHoverOrange"
                                position=""
                            />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NewestItem;
