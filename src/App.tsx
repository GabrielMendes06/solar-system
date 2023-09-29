import Navbar from "./components/Navbar/Navbar"; 
import "./App.css";
import VideoContent from "./components/Main/VideoContent/VideoContent";
import MediumPage from "./components/Main/MediumPage/MediumPage";


function App() {
  return (
    <div className="App">        
      <header>
        <Navbar />
      </header>
      <main>
        <VideoContent />
        <MediumPage />
      </main>
    </div>
  );
}

export default App;
