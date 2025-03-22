import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getCurrentTrainLocations } from "../services/api";
import { useEffect, useState } from "react";
import { divIcon } from "leaflet";

function Map() {
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
        <>
            {error && <div>{error}</div>}

            <MapContainer center={[60.192059, 24.945831]} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {loading ? (<div className="loading">Loading...</div>) : (
                    trains.map((train) => {
                        const [longitude, latitude] = train.location.coordinates;
                        const position = [latitude, longitude];
                        return (
                            <Marker key={train.trainNumber} position={position}>
                                <Popup>
                                    Train number: {train.trainNumber} <br/>
                                    Speed: {train.speed} km/h
                                </Popup>
                            </Marker>
                        );
                    })
                )}
            </MapContainer>
        </>
    );
}

export default Map;