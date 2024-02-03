import scrollUpFn from "../helper/scrollUp";

function Button({ color, hoverBg, position }: { color: string; hoverBg: string; position: string }) {
    return (
        <button onClick={scrollUpFn}
            className={`bg-${color} text-secondaryText text-[13px] px-[31px] py-[15px] max-w-[160px] block m-auto lg:m-[${position}] xl:m-[initial] uppercase hover:bg-${hoverBg} font-bold `}
        >
            See products
        </button>
    );
}

export default Button;
