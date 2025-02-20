import { createContext, useState } from "react";

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
    const [likes, setLikes] = useState(0); // Начальное количество лайков = 0

    return (
        <LikesContext.Provider value={{ likes, setLikes }}>
            {children}
        </LikesContext.Provider>
    );
};
