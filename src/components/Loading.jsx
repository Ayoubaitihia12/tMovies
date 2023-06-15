import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

const Loading = ({loading}) => {
    return (
        <div className='w-[100%] py-40 h-[100%] flex items-center justify-center'>
            <SyncLoader
                color='#FF2E44'
                size={20}
                loading={loading}
                speedMultiplier={0.9}
            />
        </div>
    )
}

export default Loading