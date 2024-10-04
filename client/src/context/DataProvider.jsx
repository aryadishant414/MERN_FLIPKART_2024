import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [account, setAccount] = useState('');

    return (
        <DataContext.Provider value={{account, setAccount}}>
            {children}
        </DataContext.Provider>
    );
}