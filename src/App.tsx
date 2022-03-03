import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Wallet from './components/Wallet';
import { Welcome } from './components/Welcome';

function App() {

  return (
    <Router>
    <div className='home'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/wallets" element={ <Wallet /> }/>
        <Route path="/signers" element={ <div>Signers</div> }/>
      </Routes>
    </div> 
    </Router>
  );
}

export default App;
