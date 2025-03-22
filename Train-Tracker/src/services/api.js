const BASE_URL = import.meta.env.VITE_API_URL;
const bbox = "20.170898,59.512029,31.904297,70.214875";


export const getCurrentTrainLocations = async () => {
    const response = await fetch(`${BASE_URL}/train-locations/latest?bbox=${bbox}`);
    const data = await response.json();
    return data;
}