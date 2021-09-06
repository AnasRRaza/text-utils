import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {
  return (
    <div>
      <Navbar title="TextUtils" about="About TextUtils" />
      <TextForm heading="Enter the text to analyze below" />
    </div>
  );
}

export default App;
