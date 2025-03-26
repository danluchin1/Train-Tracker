import { ThemeContext } from "../contexts/ThemeProvider";
import { useContext } from "react";
import "../css/Footer.css";

function Footer(){
    const { theme } = useContext(ThemeContext);

    return(
        <footer className={`app-footer ${theme === "dark" ? "dark-mode" : ""}`}>
            <p>&copy; 2025 All rights reserved.</p>
        </footer>
    );
}

export default Footer;