import { getCurrentTrainLocations } from "../services/api";
import { useEffect, useState } from "react";

export default function Test() {
    const [trains, setTrains] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCurrentTrainLocations = async () => {
            try {
                const trainLocations = await getCurrentTrainLocations();
                setTrains(trainLocations);
            } catch (err) {
                console.log(err);
                setError("Failed to load train locations...");
            } finally {
                setLoading(false);
            }
        };

        loadCurrentTrainLocations();
    }, []);

    return (
        <div>
            {error && <div className="error-message">{error}</div>}
            
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {trains.map((train, index) => (
                        <li key={index}>{JSON.stringify(train)}</li> 
                    ))}
                </ul>
            )}
        </div>
    );
}

