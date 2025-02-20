import { useContext } from "react";
import { LikesContext } from "../context/LikesContext";

export const useLikes = () => {
    const { likes, setLikes } = useContext(LikesContext);

    const addLike = () => {
        setLikes(likes + 1); // ✅ Увеличиваем лайки на 1
    };

    return { likes, addLike };
};
