import logo from './logo.svg';
import './App.css';
import User from './components/User.js'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar';


function App() {
  const test = true;
  return (  
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
    
  );
}

export default App;
