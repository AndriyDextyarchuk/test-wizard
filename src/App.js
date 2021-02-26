import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header} from './components/Header'
import {Step1} from './components/step1'
import {Step2} from './components/step2'
import {Step3} from './components/step3'
import {Success} from './components/success.js'

import classes  from'./App.module.scss';

function App() {
  return (
    <main className={classes.container}>
      <Header/>
      <Router>
        <Route exact path='/' component={Step1}/>
        <Route path='/step2' component={Step2}/>
        <Route path='/step3' component={Step3}/>
        <Route path='/step4' component={Success}/>
      </Router>
    </main>
  );
}

export default App;
