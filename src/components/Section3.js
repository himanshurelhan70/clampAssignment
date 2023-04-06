import React from 'react'
import { HiOutlineDotsVertical, HiChevronDown, HiArrowRight } from 'react-icons/hi'
import user5 from '../images/user5.jpg'
import user6 from '../images/user6.jpg'
import user7 from '../images/user7.jpg'
import user8 from '../images/user8.jpg'
import user9 from '../images/user9.jpg'
import art from '../images/art.jpg'

export default function Section3() {
    return (
        <div className="section3 w-[45%] flex flex-col justify-between gap-6 xl:w-full xl:flex-row xl:flex-wrap">
            {/* // box 1 */}
            <div className='py-7 px-9 flex gap-8 bg-gray text-white rounded-[30px] xl:w-[calc(50%-12px)] md:w-full'>
                <div>
                    <img src={art} width={100} height={100} alt='art' />
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-xl mb-4'>Dear Client</h2>
                        <HiChevronDown fontSize={27} />
                    </div>
                    <p className='text-sm w-10/12 leading-[1.8]'> Join our online community. It helps in managing your projects</p>
                </div>
            </div>

            {/* /// box 2 */}
            <div className='py-7 px-9 flex justify-between gap-4 bg-gray text-white rounded-[30px] xl:w-[calc(50%-12px)] md:w-full'>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-xl'>Transaction Details</h2>
                    <h3>Hi Hira</h3>
                    <p className='font-bold text-lg mt-4'>$4,763.40</p>
                    <p className='text-sm'>Available Balance</p>

                    <div className='flex gap-3 mt-5 mb-14 xs:mb-16'>
                        <div className='w-[36px] h-[36px] rounded-full  bg-black flex justify-center items-center shrink-0'>
                            <HiArrowRight />
                        </div>
                        <div className='shrink-0'>
                            <img src={user6} className='w-[36px] h-[36px] rounded-full object-cover object-top' alt="user" />
                        </div>
                        <div className='shrink-0'>
                            <img src={user7} className='w-[36px] h-[36px] rounded-full object-cover object-top' alt="user" />
                        </div>
                        <div className='shrink-0'>
                            <img src={user8} className='w-[36px] h-[36px] rounded-full object-cover object-top' alt="user" />
                        </div>
                        <div className='shrink-0'>
                            <img src={user9} className='w-[36px] h-[36px] rounded-full object-cover object-top' alt="user" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between items-end'>
                    <img src={user5} className='w-[50px] h-[50px] rounded-full object-cover object-top' alt="user" />
                    <p>**** 3863</p>
                    <button className='py-2 px-7 bg-pink rounded-3xl font-bold hover:bg-blue transition-all'>Send</button>
                </div>
            </div>

            {/* /// box 3*/}
            <div className='flex gap-4 xl:w-full xl:gap-6 sm:flex-wrap'>
                <div className='relative py-7 px-9 w-1/2 flex flex-col gap-2 text-white rounded-[30px] bg-gray xl:w-1/2 sm:w-full'>
                    <h2 className='text-xl'>Project Details</h2>
                    <p className='text-2xl font-bold text-pink'>Hira R.</p>
                    <p>UX/UI Designer</p>
                    <h3 className='font-bold mt-6'>Projects Progress</h3>
                    <div className='progress-meter relative w-full h-2.5 bg-white before:w-9/12 before:h-full before:bg-blue mt-10  rounded-md 
                before:absolute before:rounded-md before:top-0 before:content-[""] after:absolute after:content-["75%"] 
                after:right-0 after:-top-8 after:font-bold'>
                    </div>

                    {/* //dots */}
                    <HiOutlineDotsVertical fontSize={27} className='absolute top-6 right-4' />
                </div>

                <div className='relative py-7 px-9 w-1/2  flex flex-col gap-8 justify-between text-white rounded-[30px] bg-gray xl:w-1/2 sm:w-full'>
                    <h2 className='text-xl'>Project Progress</h2>
                    {/* inner circle */}
                    <div style={{ background: `conic-gradient(#3727AE 275deg, transparent 0)` }} className='relative w-[120px] h-[120px] 
                rounded-full bg-blue flex items-center justify-center font-bold text-lg self-center
                before:absolute before:w-[100px] before:h-[100px] before:rounded-full before:bg-gray
                after:absolute after:w-[80px] after:h-[80px] after:rounded-full after:bg-pink after:content-["75%"] 
                after:flex after:justify-center after:items-center
                '>
                        75%
                    </div>
                    <p>3 Remaining Projects</p>
                    {/* //dots */}
                    <HiOutlineDotsVertical fontSize={27} className='absolute top-6 right-4' />
                </div>
            </div>
        </div>
    )
}
