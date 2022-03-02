import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Wallet from './components/Wallet';

function App() {

  return (
    <Router>
    <div className='home'>
      <Navigation />
      <Routes>
        <Route path="/wallets" element={ <Wallet /> }/>
        <Route path="/signers" element={ <div>Signers</div> }/>
      </Routes>
    </div> 
    </Router>
  );
}

export default App;
