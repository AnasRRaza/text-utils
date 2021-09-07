import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743"
    }
    else {
      setMode("light");
      document.body.style.background = "white"
    }
  }

  return (
    <div>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze below" mode={mode} />
    </div>
  );
}

export default App;
