import { ThemeProvider } from "./components//context/ThemeContext.jsx";
import { LanguageProvider } from "./components/context/LanguageContext.jsx";
import { LikesProvider } from "./components/context/LikesContext.jsx";
import UserPanelContainer from "./components/UserPanel/UserPanelContainer.jsx";

export function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <LikesProvider>
                    <UserPanelContainer />
                </LikesProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
};

export default App;
