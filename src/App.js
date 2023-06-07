
import './App.css';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import { Provider } from 'react-redux'
import { store } from './store/index';


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Navbar />
      <UserDetails />
    </div>
    </Provider>
  );
}

export default App;
