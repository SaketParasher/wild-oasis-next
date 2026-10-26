"use client"

import { createContext, useContext, useState } from "react";

const DateRangeContext = createContext();
const initialState = { from: undefined, to: undefined }

export const DateRangeContextProvider = ({ children }) => {
    const [range, setRange] = useState(initialState)

    const resetRange = () => setRange(initialState)

    return <DateRangeContext.Provider value={{ range, setRange, resetRange }}>
        {children}
    </DateRangeContext.Provider>
}

export const useDateRange = () => {
    const dateRangeContext = useContext(DateRangeContext)

    if (!dateRangeContext) {
        throw new Error('Date Range Context was used outside the Provider!')
    }

    return dateRangeContext;
}