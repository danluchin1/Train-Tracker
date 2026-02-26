import "../css/TrainSidebar.css";
import { TrainDetailsProps, TrainSidebarProps } from "../types/types";

function TrainSidebar({ trains, onTrainSelect }: TrainSidebarProps) {

    return (
        <div className="train-sidebar">
            <h2>Train List</h2>
            <ul>
                {trains && trains.length > 0 ? (
                    trains.map((train: TrainDetailsProps) => (
                        <li key={train.trainNumber} title="See the train on the map" onClick={() => onTrainSelect(train)}>
                            <strong>Train number:</strong> {train.trainNumber} <br />
                            <strong>Train type:</strong> {train.type} <br />
                            <strong>Speed:</strong> {train.speed} km/h
                        </li>
                    ))
                ) : (
                    <li className="empty-message">No trains available</li>
                )}
            </ul>
        </div>
    );
}

export default TrainSidebar;