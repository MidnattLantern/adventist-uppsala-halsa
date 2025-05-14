import { createContext, useEffect, useState } from "react";

const ViewPortContext = createContext<ViewPortContextType | undefined>(undefined);

interface ViewPortContextType {
    viewportWidth : number;
};

interface ViewPortContextProps {
    children: React.ReactNode;
};

const ViewPortContextProvider: React.FC<ViewPortContextProps> = ({children}) => {
    const [viewportWidth, setviewportWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setviewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <ViewPortContext.Provider value={{
            viewportWidth
        }}>
            {children}
        </ViewPortContext.Provider>
    );
};

export { ViewPortContextProvider, ViewPortContext };