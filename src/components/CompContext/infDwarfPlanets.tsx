import { ReactNode, createContext, useState } from "react";

export const InfDwarfPlanets = createContext<any>({});
export const DwarfPlanetsProvider = ({ children }: { children: ReactNode }) => {
    const [dwarfPlanets, setDwarfPlanets] = useState<JSON[]>([]);

    return(
        <InfDwarfPlanets.Provider value={{ dwarfPlanets, setDwarfPlanets }}>
            {children}
        </InfDwarfPlanets.Provider>
    )
}