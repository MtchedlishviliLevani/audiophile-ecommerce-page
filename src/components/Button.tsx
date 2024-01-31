function Button({ color, hoverBg, position }: { color: string; hoverBg: string; position: string }) {
    return (
        <button
            className={`bg-${color} text-secondaryText text-[13px] px-[31px] py-[15px] block m-auto lg:m-[${position}] xl:m-[initial] uppercase hover:bg-${hoverBg} font-bold `}
        >
            See products
        </button>
    );
}

export default Button;
