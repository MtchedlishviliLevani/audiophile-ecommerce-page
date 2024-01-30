function Button({ children }: { children: string }) {
    return (
        <button className='bg-buttonBackground text-secondaryText text-[13px] px-[31px] py-[15px] block m-auto xl:m-[initial] uppercase hover:bg-[#fbaf85] font-bold'>{children}</button>
    )
}

export default Button
