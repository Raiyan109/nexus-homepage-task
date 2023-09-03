import { createContext, useState } from "react";


export const PageContext = createContext()


// eslint-disable-next-line react/prop-types
const PageProvider = ({ children }) => {
    const [upperNav2Open, setUpperNav2Open] = useState(false)
    const value = {
        upperNav2Open, setUpperNav2Open
    }

    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )
}

export default PageProvider; 