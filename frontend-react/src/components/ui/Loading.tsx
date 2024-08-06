import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <AiOutlineLoading3Quarters className="animate-spin text-white text-4xl" />
        </div>
    )
}

export default Loading
