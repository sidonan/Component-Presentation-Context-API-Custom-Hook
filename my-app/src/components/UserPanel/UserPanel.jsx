import React from "react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import { useLikes } from "../hooks/useLikes";
import en from "../translations/en.json";
import ru from "../translations/ru.json";

const translations = { en, ru };

const UserPanel = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const { likes, addLike } = useLikes(); // ✅ Используем `addLike` вместо `toggleLike`
    const t = translations[language] || en; // ✅ Гарантируем, что перевод всегда есть

    return (
        <div className={`panel ${theme}`}>
            <h2>{t.greeting || "Hello, User!"}</h2>
            <p>{t.likes || "Likes:"} {likes}</p>
            <button onClick={addLike}>
                {likes > 0 ? "❤️ " + t.liked : "👍 " + t.like}
            </button>
            <button onClick={toggleTheme}>{t.toggleTheme || "Toggle Theme"}</button>
            <button onClick={toggleLanguage}>{t.switchLanguage || "Switch Language"}</button>
        </div>
    );
};

export default UserPanel;
