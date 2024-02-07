import React, { useState } from 'react'
import Container from '../components/Container'

function CheckoutPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const [isActive, setIsActive] = useState(true)
    console.log(isActive)

    return (
        <>
            <Container>
                <section>
                    <form action="">
                        <h2 className='uppercase text-[28px] font-bold'>checkout</h2>
                        <div>
                            <h3 className='uppercase text-[13px] font-bold text-buttonBackground mt-[25px] mb-[15px]'>billing details</h3>
                            <div>
                                <label htmlFor="name" className='text-[12px] font-bold '>Name</label>
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                {name == "" ? <span className='text-[#FF0000] block text-end'>Required</span> : null}
                            </div>
                            <div>
                                <label htmlFor="email" className='text-[12px] font-bold '>EMAIL</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='alexei@mail.com' className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                {!email.includes("@") ? <span className='text-[#FF0000] block text-end'>Required</span> : null}

                            </div>
                            <div>
                                <label htmlFor="tel" className='text-[12px] font-bold '>Phone number</label>
                                <input onChange={(e) => setTel(e.target.value)} type="text" placeholder='+1 202-555-0136' className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                {!/\d/.test(tel) ? <span className='text-[#FF0000] block text-end'>Required</span> : null}

                            </div>

                        </div>
                        <div>
                            <h3 className='uppercase text-[13px] font-bold text-buttonBackground mt-[25px]'>shipping info</h3>
                            <div>
                                <label htmlFor="address" className='text-[12px] font-bold '>YOUR ADDRESS</label>
                                <input onChange={(e) => setAddress(e.target.value)} type="text" placeholder='1137 Williams Avenue' className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                {!/[a-zA-Z]/.test(address) ? <span className='text-[#FF0000] block text-end'>Required</span> : null}

                            </div>
                            <div>
                                <label htmlFor="zip" className='text-[12px] font-bold '>Zip code</label>
                                <input onChange={(e) => setZip(e.target.value)} type="text" placeholder='10001' className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                {!/\d/.test(zip) ? <span className='text-[#FF0000] block text-end'>Required</span> : null}

                            </div>
                            <div>
                                <label htmlFor="address" className='text-[12px] font-bold '>ADDRESS</label>
                                <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='New York' className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                {!/[a-zA-Z]/.test(city) ? <span className='text-[#FF0000] block text-end'>Required</span> : null}

                            </div>
                            <div>
                                <label htmlFor="" className='text-[12px] font-bold '>COUNTRY</label>
                                <input onChange={(e) => setCountry(e.target.value)} type="text" placeholder='UNITED STATES' className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                {!/[a-zA-Z]/.test(country) ? <span className='text-[#FF0000] block text-end'>Required</span> : null}
                            </div>
                        </div>
                        <div className='my-[30px]'>
                            <h3 className='uppercase text-[13px] font-bold text-buttonBackground mt-[25px]'>payment details</h3>
                            <div>
                                <h3 className='font-bold uppercase my-[25px]'>payment method</h3>
                                <div className={`pl-[10px] rounded-[8px] border border-solid  border-1 ${isActive ? 'border-[#D87D4A]' : ''} border-[#cfcfcf]  w-[100%]`}>
                                    <label htmlFor="yourInputId" className='pt-[4.5px] pl-[50px] relative  mb-[12px] text-[22px] block'>e-Money
                                        <input type="radio" onChange={() => setIsActive(true)} checked={isActive} className='absolute opacity-0 left-[19px] top-[15px] opacity- z-10 cursor-pointer' />
                                        <span className={`absolute top-[12px] left-[15px] w-[1.25rem] h-[1.25rem] border border-solid border-1 border-[#cfcfcf] rounded-[50%] before:content-[""] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-[8px] before:h-[8px] before:rounded-[50%] before:block ${isActive ? 'before:bg-buttonBackground' : ''}`}></span>
                                    </label>
                                </div>
                                <div className={` mt-[30px] pl-[10px]  rounded-[8px] border border-solid border-1  w-[100%] border-[#cfcfcf] ${!isActive ? 'border-[#D87D4A]' : ''}`}>
                                    <label htmlFor="yourInputId" className='pt-[4.5px] pl-[50px] relative  mb-[12px] text-[22px] block'>e-Money
                                        <input type="radio" onChange={() => setIsActive(false)} checked={!isActive} className='absolute opacity-0 top-[19px] left-[15px] z-10 cursor-pointer ' />
                                        <span className={`absolute top-[12px] left-[15px] w-[1.25rem] h-[1.25rem] border border-solid border-1 border-[#cfcfcf] rounded-[50%] before:content-[""] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-[8px] before:h-[8px] before:rounded-[50%] before:block ${!isActive ? 'before:bg-buttonBackground' : ""}`}></span>
                                    </label>
                                </div>




                            </div>
                            <div className='my-[20px]'>
                                <div className=''>
                                    <label className="text-[12px] font-bold">e-Money Number</label>
                                    <input type="text" className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                </div>
                                <div className=''>
                                    <label className="text-[12px] font-bold ">e-Money Pin</label>
                                    <input type="text" className='border border-solid border-1 border-[#cfcfcf] outline-none rounded-[8px] pl-[24px] py-[12px] block mt-[8px] w-[100%]' />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div></div>
                </section ></Container >
        </>
    )
}


export default CheckoutPage
