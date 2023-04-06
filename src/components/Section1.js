import React from "react";
import { TiFolderDelete } from 'react-icons/ti'
import { AiOutlineCalendar } from 'react-icons/ai'
import { VscGraph } from 'react-icons/vsc'
import { FaWpforms } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'


export default function Section1() {
    return (
        <div className="section1 w-[20%] flex flex-col justify-between gap-6 xl:w-[calc(40%-40px)] md:w-full">
            {/* box 1 */}
            <div className="py-7 px-9 flex flex-col bg-gray text-white gap-1 rounded-[30px]">
                <h2 className="font-bold text-xl text-pink">Hira R.</h2>
                <h3>UX/UI Designer</h3>

                <div className="flex justify-between mt-8">
                    <div>
                        <p className="font-bold">125</p>
                        <p className="mt-1">Projects</p>
                    </div>
                    <div>
                        <p className="font-bold">&#36;124</p>
                        <p className="mt-1">Revenue</p>
                    </div>
                </div>
            </div>

            {/* // box 2 */}
            <div className="dashboard py-7 px-9 flex flex-col bg-gray text-white gap-6 rounded-[30px]">
                <div className="flex items-center gap-4 group">
                    <div className="icon rounded-lg p-[6px] group-hover:bg-black transition-all duration-100">
                        <TiFolderDelete fontSize={23} />
                    </div>
                    <h3 className="group-hover:font-medium transition-all duration-100">
                        Dashboard
                    </h3>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="icon rounded-lg p-[6px] group-hover:bg-black transition-all duration-100">
                        <HiOutlineMail fontSize={23} />
                    </div>
                    <h3 className="group-hover:font-medium transition-all duration-100">
                        Email
                    </h3>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="icon rounded-lg p-[6px] group-hover:bg-black transition-all duration-100">
                        <AiOutlineCalendar fontSize={23} />
                    </div>
                    <h3 className="group-hover:font-medium transition-all duration-100">
                        Calender
                    </h3>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="icon rounded-lg p-[6px] group-hover:bg-black transition-all duration-100">
                        <VscGraph fontSize={23} />
                    </div>
                    <h3 className="group-hover:font-medium transition-all duration-100">
                        Graph
                    </h3>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="icon rounded-lg p-[6px] group-hover:bg-black transition-all duration-100">
                        <FaWpforms fontSize={23} />
                    </div>
                    <h3 className="group-hover:font-medium transition-all duration-100">
                        Forms
                    </h3>
                </div>
            </div>

            {/* // box 3*/}
            <div className="dashboard py-7 px-9 flex flex-col bg-blue text-white gap-4 rounded-[30px]">
                <h2 className="font-bold text-xl">Go Pro</h2>
                <p>Upgrade your plan to get pro benifits</p>
                <button className="rounded-[20px] self-end text-white bg-black w-fit text-sm font-medium py-2 px-3.5 rounded-tr-none">
                    Let's Start
                </button>
            </div>
        </div>

    );
}
