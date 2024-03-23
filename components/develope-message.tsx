import React from 'react'
import { FaGear } from 'react-icons/fa6'

const DevelopeMessage = () => {
    return (
        <div className="my-32 flex justify-center items-center text-4xl pt-20 text-primary font-bold uppercase gap-4">
            <FaGear size={60} className="animate-spin" />  In fase di sviluppo<FaGear size={60} className="animate-spin" />
        </div>
    )
}

export default DevelopeMessage