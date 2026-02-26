export type ThemeContextProps = {
    theme: string;
    toggleTheme: () => void;
}

export interface TrainLocationResponse {
    trainNumber: number;
    departureDate: string;
    speed: number;
    location: {
        type: string;
        coordinates: [number, number];
    }
}

export interface TrainTechnicalDetails {
    operatorShortCode: string;
    trainType: string;
    trainCategory: string;
}

export type TrainDetailsProps = {
    trainNumber: number;
    type: string;
    category: string;
    operator: string;
    departureDate: string;
    speed: number;
    location: {
        coordinates: [number, number];
    }
}

export type TrainSidebarProps = {
    trains: TrainDetailsProps[];
    onTrainSelect: (train: TrainDetailsProps) => void;
}