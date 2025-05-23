const bbox = "20.170898,59.512029,31.904297,70.214875";

const baseUrl = import.meta.env.PROD
  ? 'https://rata.digitraffic.fi/api/v1'
  : '/api';

export const getCurrentTrainLocations = async () => {
    const response = await fetch(`${baseUrl}/train-locations/latest?bbox=${bbox}`);
    const data = await response.json();
    
    // Extract Last Updated Timestamp from headers
    const lastUpdated = response.headers.get("date");

    return { data, lastUpdated };
}

export const getTrainDetails = async (trainNumber) => {
    const today = new Date().toISOString().split("T")[0];
    const response = await fetch(`${baseUrl}/trains/${today}/${trainNumber}`);
    const data = await response.json();
    return data;
}