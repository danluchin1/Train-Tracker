import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeProvider";
import "./css/index.css";

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <Map />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
