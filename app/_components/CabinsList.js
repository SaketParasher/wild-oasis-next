import React from 'react'
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service"

const CabinsList = async ({ capacity }) => {
    const cabins = await getCabins();

    let filteredCabins;
    if (capacity === 'all') {
        filteredCabins = cabins
    }

    if (capacity === 'small') {
        filteredCabins = cabins.filter(cabin => cabin.maxCapacity <= 3)
    }

    if (capacity === 'medium') {
        filteredCabins = cabins.filter(cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7)
    }

    if (capacity === 'large') {
        filteredCabins = cabins.filter(cabin => cabin.maxCapacity >= 8)
    }

    if (!cabins.length) {
        return null
    }
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {filteredCabins?.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}

export default CabinsList