function Button({ children }: { children: string }) {
    return (
        <button className='bg-buttonBackground text-secondaryText text-[13px] px-[31px] py-[15px] block m-auto'>{children}</button>
    )
}

export default Button
