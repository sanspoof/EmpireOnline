import { createContext, useContext } from "react";
import data from "../appData.json";

const DataContext = createContext(data);

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    ); 
}; 