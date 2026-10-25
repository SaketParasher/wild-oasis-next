import React from 'react'
import Spinner from '@/app/_components/Spinner'

const Loading = () => {
    return (
        <div>
            <Spinner />
            <p className='text-xl text-primary-200 text-center'>Loading Data...</p>
        </div>
    )
}

export default Loading