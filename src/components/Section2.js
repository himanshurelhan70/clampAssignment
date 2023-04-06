import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'
import user4 from '../images/user4.jpg'

export default function Section2() {
    return (
        <div className="section2 w-[35%] flex flex-col justify-between gap-6 xl:w-[60%] md:w-full">
            {/* // box 1 */}
            <div className='py-7 px-9 flex items-center bg-gray text-white gap-20 rounded-[30px] sm:gap-8'>
                <div className="icon flex shrink-0 justify-center items-center w-11 h-11 rounded-full bg-black text-white">
                    <BsCurrencyDollar fontSize={19} />
                </div>

                <div className='w-[60%]'>
                    <h2 className='text-xl'>Total Revenue</h2>
                    <p className='flex items-center font-medium mb-4 text-2xl'>
                        &#36;92,983
                    </p>
                    <div className='w-full h-2 relative bg-white before:content-[""] before:w-[70%] before:h-full
            before:bg-blue before:absolute before:top-0'></div>
                </div>
            </div>

            {/* /// box 2*/}
            <div className='flex gap-6 xs:flex-wrap'>
                <div className='py-6 px-6 w-1/2 flex flex-col gap-2 bg-gray text-white rounded-[30px] xs:w-full'>
                    <h2 className='font-bold text-lg'>Travel</h2>
                    <h3 className='text-sm'>Mobile Application</h3>
                    <h4 className='text-xs mt-2'>Seen by</h4>
                    <div className='relative h-10 my-3'>
                        <div className='w-9 h-9 bg-slate-400 border rounded-full absolute left-0 z-40'>
                            <img src={user1} alt="user" className='rounded-full object-cover' />
                        </div>
                        <div className='w-9 h-9 bg-slate-400 border rounded-full absolute left-[20px] z-30'>
                            <img src={user2} alt="user" className='rounded-full object-cover' />
                        </div>
                        <div className='w-9 h-9 bg-slate-400 border rounded-full absolute left-[40px] z-20'>
                            <img src={user3} alt="user" className='rounded-full object-cover' />
                        </div>
                        <div className='w-9 h-9 bg-slate-400 border rounded-full absolute left-[60px] z-10'>
                            <img src={user4} alt="user" className='rounded-full object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3.5'>
                        <button className='py-1 px-5 rounded-2xl text-white bg-black
                hover:bg-blue transition-all duration-100'>Tour</button>
                        <button className='py-1 px-5 rounded-2xl text-white bg-black
                hover:bg-blue transition-all duration-100'>Trip</button>
                        <button className='py-1 px-5 rounded-2xl text-white bg-black
                hover:bg-blue transition-all duration-100'>Transport</button>
                    </div>
                </div>

                <div className='py-6 px-6 w-1/2 flex flex-col gap-2 bg-gray text-white rounded-[30px] xs:w-full'>
                    <h2 className='font-bold text-lg'>Hotel</h2>
                    <h3 className='text-sm'>Dashboard</h3>
                    <h4 className='text-xs mt-2'>Seen by</h4>
                    <div className='relative h-10 my-3'>
                        <div className='w-9 h-9 bg-slate-400 border rounded-full absolute left-0 z-40'>
                            <img src={user1} alt="user" className='rounded-full object-cover' />
                        </div>
                        <div className='w-9 h-9 bg-slate-400 border rounded-full absolute left-[20px] z-30'>
                            <img src={user2} alt="user" className='rounded-full object-cover' />
                        </div>
                        <div className='w-9 h-9 bg-slate-400 border rounded-full absolute left-[40px] z-20'>
                            <img src={user3} alt="user" className='rounded-full object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3.5'>
                        <button className='py-1 px-5 rounded-2xl text-white bg-black
                hover:bg-blue transition-all duration-100'>Tour</button>
                        <button className='py-1 px-5 rounded-2xl text-white bg-black
                hover:bg-blue transition-all duration-100'>Trip</button>
                        <button className='py-1 px-5 rounded-2xl text-white bg-black
                hover:bg-blue transition-all duration-100'>Transport</button>
                    </div>
                </div>
            </div>

            {/* // box 3*/}
            <div className='py-7 px-9 flex flex-col gap-2 bg-gray text-white rounded-[30px]'>
                <div className='flex justify-between'>
                    <h2 className='text-lg font-medium mb-8'>Free Slots Available</h2>

                    <input type="checkbox" name="" id="slots" defaultChecked={true} className='peer/slots hidden' />
                    <label htmlFor="slots" className='relative block w-10 h-2 bg-black 
            before:w-5 before:h-5 before:rounded-full before:bg-blue before:absolute before:-top-[5px] 
            before:left-0 before:transition-all peer-checked/slots:before:left-1/2'></label>
                </div>

                <div className='flex flex-wrap justify-between gap-5 max-w-max'>
                    <div className='flex flex-col h-[100px] w-[90px] gap-2 items-center justify-center bg-black rounded-3xl
            hover:bg-pink transition-all duration-100'>
                        <p className='font-bold text-2xl'>12</p>
                        <p>June</p>
                    </div>

                    <div className='flex flex-col h-[100px] w-[90px] gap-2 items-center justify-center bg-black rounded-3xl
            hover:bg-pink transition-all duration-100'>
                        <p className='font-bold text-2xl'>18</p>
                        <p>June</p>
                    </div>

                    <div className='flex flex-col h-[100px] w-[90px]  gap-2 items-center justify-center bg-black rounded-3xl
            hover:bg-pink transition-all duration-100'>
                        <p className='font-bold text-2xl'>20</p>
                        <p>June</p>
                    </div>

                    <div className='flex flex-col h-[100px] w-[90px]  gap-2 items-center justify-center bg-black rounded-3xl
            hover:bg-pink transition-all duration-100'>
                        <p className='font-bold text-2xl'>02</p>
                        <p>July</p>
                    </div>

                    <div className='flex flex-col h-[100px] w-[90px]  gap-2 items-center justify-center bg-black rounded-3xl
            hover:bg-pink transition-all duration-100'>
                        <p className='font-bold text-2xl'>10</p>
                        <p>July</p>
                    </div>

                    <div className='flex flex-col h-[100px] w-[90px]  gap-2 items-center justify-center bg-black rounded-3xl
            hover:bg-pink transition-all duration-100'>
                        <p className='font-bold text-2xl'>15</p>
                        <p>July</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
