function PageNameComp({ title }: { title: string }) {
    return (
        <div className='h-[80px] bg-primaryBackground grid place-items-center'>
            <h2 className='text-secondaryText text-2xl font-bold'>{title}</h2>
        </div>
    )
}

export default PageNameComp
