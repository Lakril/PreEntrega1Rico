import { createContext } from "react";

export const TaskContext = createContext(null)


// eslint-disable-next-line react/prop-types
export const ContextProvide = ({ children }) => {

    const value = []

    return (
        <TaskContext.Provider value={{ value }}>
            {children}
        </TaskContext.Provider>
    )
}

export default ContextProvide
