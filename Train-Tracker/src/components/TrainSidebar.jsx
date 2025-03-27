import "../css/TrainSidebar.css";

function TrainSidebar({ trains, onTrainSelect }) {

    return (
        <div className="train-sidebar">
            <h2>Train List</h2>
            <ul>
                {trains.length > 0 ? (
                    trains.map((train) => (
                        <li key={train.trainNumber} onClick={() => onTrainSelect(train)}>
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