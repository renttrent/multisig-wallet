import { useContext } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Wallet from './components/Wallet';
import { Welcome } from './components/Welcome';
import { Web3Context } from './context/web3context';

function App() {
  const { provider } = useContext(Web3Context)

  if(!provider) {
    return (
      <>
       <Welcome /> 
      </>
    )
  }
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
