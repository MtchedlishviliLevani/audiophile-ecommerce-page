function PageNameComp({ title }: { title: string }) {
    return (
        <div className='py-[32px] md:py-[95px] text-center bg-primaryBackground '>
            <h2 className='text-secondaryText text-2xl font-bold'>{title}</h2>
        </div>
    )
}

export default PageNameComp
