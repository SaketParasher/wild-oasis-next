import React from 'react'
import DateSelector from '@/app/_components/DateSelector'
import ReservationForm from '@/app/_components/ReservationForm'

import { getSettings, getBookedDatesByCabinId } from '@/app/_lib/data-service'


const Reservation = async ({ cabin }) => {

  const [settings, bookedDates] = await Promise.all([getSettings(), getBookedDatesByCabinId(cabin.id)])

  return (
    <div className="flex flex-col gap-10 border border-primary-500 mt-8">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  )
}

export default Reservation