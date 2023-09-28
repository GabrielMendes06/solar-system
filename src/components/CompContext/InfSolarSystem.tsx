import { ReactNode, createContext, useState } from "react";

export const InfSolarSystem = createContext<any>({});
export const SolarSystemProvider = ({ children }: { children: ReactNode }) => {
    const [planets, setPlanets] = useState<JSON[]>([]);

    return(
        <InfSolarSystem.Provider value={{ planets, setPlanets }}>
            {children}
        </InfSolarSystem.Provider>
    )
}

