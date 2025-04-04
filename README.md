# Train-Tracker - Live Train Tracking in Finland

## Project Overview
Train Tracker is a React-based web application that provides real-time tracking of trains in Finland. It fetches live train data from the Digi Traffic API and displays the train locations on an interactive map. The project aims to provide an intuitive and user-friendly interface for monitoring train movements, helping commuters and railway enthusiasts stay updated.

## Features
* **Live Train Tracking**: Displays real-time locations of trains in Finland.
* **Interactive Map**: Users can visually track train movements.
* **Sidebar Information Panel**: Provides details about specific trains.
* **Responsive UI**: Optimized for seamless use across different screen sizes.
* **Modular Components**: Structured with reusable React components for maintainability.

## Technologies Used
* React.js: Frontend framework for building the user interface.
* Vite: Fast development build tool for optimizing performance.
* DigiTraffic API: Data source for real-time train location tracking.
* CSS Modules: Styling components independently.
* Git: Version control system for source code management.

## Installation & Setup
1. **Install Node.js**
    Before setting up the project, ensure you have Node.js installed. You can check by running:
    ```sh
    node -v
    ```
    If Node.js is not installed, download and install it from [Node.js official website](https://nodejs.org/en).

2. **Clone the repository**
    ```sh
    git clone https://github.com/danluchin1/Train-Tracker
    cd Train-Tracker
    ```

3. **Create an `.env` file**<br>
    Inside the project directory, create a `.env` file and add the following content:
    ```sh
    VITE_API_URL=https://rata.digitraffic.fi/api/v1
    ```
    This sets up the API base URL for fetching train data.

4. **Install dependencies**
    ```sh
    npm install
    ```

5. **Start the Development Server**
    ```sh
    npm run dev
    ```

6. Open the application in your browser at `http://localhost:5173/`.

## Contribution
Contributions are welcome! If you find a bug or have a feature suggestion, feel free to submit an issue or open a pull request.