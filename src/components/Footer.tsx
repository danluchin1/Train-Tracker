import { useTheme } from "../contexts/ThemeProvider";
import "../css/Footer.css";

function Footer(){
    const { theme } = useTheme();

    return(
        <footer className={`app-footer ${theme === "dark" ? "dark-mode" : ""}`}>
            <p>&copy; 2025 All rights reserved.</p>
        </footer>
    );
}

export default Footer;