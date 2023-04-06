import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export default function Dashboard() {
    return (
        <div className='wrapper w-full h-max flex justify-center xl:flex-wrap xl:justify-start p-11 gap-10 max-w-[1500px] xs:p-4'>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}
