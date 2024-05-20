import "./App.css";
import AppRoutes from "./Components/Routes/AppRoutes.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header/>
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
