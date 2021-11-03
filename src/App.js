import { Switch, Route } from 'react-router-dom';
import BasicInfo from './pages/basicinfo/BasicInfo';
import Income from './pages/income/Income';
import Header from './components/header/Header'
import Deduction from './pages/deduction/Deduction';
import CreditsAndPayments from './pages/creditsandpayments/CreditsAndPayments';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={BasicInfo} />
        <Route exact path='/income' component={Income} />
        <Route exact path='/deduction' component={Deduction} />
        <Route exact path='/creditsandpayments' component={CreditsAndPayments} />
        {/* Keeping in case <BasicInfo />
        <Income />
        <Deduction />
        <CreditsAndPayments /> */}
     </Switch>
    </div>
  );
}

export default App;
