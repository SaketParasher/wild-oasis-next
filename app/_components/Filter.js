"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Filter = ({ searchParams }) => {

    console.log(searchParams)

    const params = useSearchParams();
    const pathName = usePathname()
    const router = useRouter()

    const handleFilter = (filterTerm) => {
        const serachParams = new URLSearchParams(params);
        serachParams.set('capacity', filterTerm)
        router.replace(`${pathName}?${serachParams.toString()}`, { scroll: false })

    }

    return (
        <div className='border-primary-800 border flex'>
            <button className={`px-3 py-2 hover:bg-primary-700
                ${searchParams?.capacity === 'all' || !searchParams?.capacity ? 'bg-primary-500' : ''}`}
                onClick={() => handleFilter('all')}>
                All Cabins
            </button>
            <button className={`px-3 py-2 hover:bg-primary-700
                ${searchParams?.capacity === 'small' ? 'bg-primary-500' : ''}`}
                onClick={() => handleFilter('small')}>
                1&mdash;3 Guests
            </button>
            <button className={`px-3 py-2 hover:bg-primary-700
                ${searchParams?.capacity === 'medium' ? 'bg-primary-500' : ''}`}
                onClick={() => handleFilter('medium')}>
                4&mdash;7 Guests
            </button>
            <button className={`px-3 py-2 hover:bg-primary-700
            ${searchParams?.capacity === 'large' ? 'bg-primary-500' : ''}`}
                onClick={() => handleFilter('large')}>
                8&mdash;12 Guests
            </button>
        </div>
    )
}

export default Filter