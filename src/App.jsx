import "./App.css";
import AppRoutes from "./Components/Routes/AppRoutes.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import News from "./Components/News/News.jsx";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <News/>
      <Footer />
    </div>
  );
}

export default App;
