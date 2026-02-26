import { getCurrentTrainLocations } from "../services/api";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeProvider";
import "../css/Header.css";
import { TrainLocationResponse } from "../types/types";

function Header() {
    const [trains, setTrains] = useState<TrainLocationResponse[]>([]);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const loadCurrentTrainLocations = async () => {
            try {
                const { data, lastUpdated} = await getCurrentTrainLocations();
                setTrains(data);
                setLastUpdated(lastUpdated);
            } catch (err) {
                console.log(err);
                setError("Failed to load train time stamp...");
            }
            finally {
                setLoading(false);
            }
        }

        loadCurrentTrainLocations();
    }, [])

    return (
        <>
            {error ? (
                <div className="Error-message">{error}</div>
            ) : (
                loading ? (
                    <div className="loading-spinner"></div>
                ) : (
                    <header className="app-header">
                        <div className="header-content">
                            <h1>Live Train Tracker</h1>
                            <p>Real-time train locations and details powered by the DigiTraffic API.</p>
                        </div>
                        <div className="header-info">
                                <span>Last updated: {lastUpdated ? new Date(lastUpdated).toLocaleString() : "N/A"}</span>
                                <button onClick={toggleTheme} title="Change the theme" className="dark-mode-toggle">
                                    {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
                                </button>
                        </div>
                    </header>
                )
            )}
        </>
    );
}

export default Header;