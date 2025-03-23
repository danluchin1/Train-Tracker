import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getCurrentTrainLocations } from "../services/api";
import "../css/Map.css";
import { useEffect, useState } from "react";

function Map() {
    const [trains, setTrains] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    let greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      let goldIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      let redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

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
        const interval = setInterval(loadCurrentTrainLocations, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {error && <div>{error}</div>}

            <div className="wrap-container">
                <MapContainer center={[60.192059, 24.945831]} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {loading ? (<div className="loading-spinner"></div>) : (
                        trains.map((train) => {
                            const [longitude, latitude] = train.location.coordinates;
                            const position = [latitude, longitude];

                            let icon = redIcon;
                            if(train.speed >= 50 && train.speed <= 100){
                                icon = goldIcon;
                            }else if(train.speed > 100){
                                icon = greenIcon;
                            }

                            return (
                                <Marker key={train.trainNumber} position={position} icon={icon}>
                                    <Popup>
                                        Train number: {train.trainNumber} <br />
                                        Departure Date: {train.departureDate} <br />
                                        Speed: {train.speed} km/h
                                    </Popup>
                                </Marker>
                            );
                        })
                    )}
                </MapContainer>
            </div>
        </>
    );
}

export default Map;