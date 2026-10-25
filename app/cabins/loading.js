import React from 'react'
import Spinner from '@/app/_components/Spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Spinner />
            <p className='text-xl text-primary-200 text-center'>Loading Cabins Data...</p>
        </div>
    )
}

export default Loading