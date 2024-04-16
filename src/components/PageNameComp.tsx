import { motion } from "framer-motion"
function PageNameComp({ title }: { title: string }) {
    return (
        <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: .5 }}
            className='py-[32px] md:py-[95px] text-center bg-primaryBackground mt-[87=9px] md:mt-[85px]'>
            <h2 className='text-secondaryText text-2xl font-bold'>{title}</h2>
        </motion.div>
    )
}

export default PageNameComp
