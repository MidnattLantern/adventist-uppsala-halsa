// context provider allowing viewport for JSX logic
import { useContext } from "react";
import { ViewPortContext } from "./ViewportContext";

export const useViewPortContext = () => {
    const context = useContext(ViewPortContext);
    if (!context) {
        throw new Error("ViewPortContext error: useViewPortContext must be used within a ViewPortContextProvider");
    };
    return context;
};