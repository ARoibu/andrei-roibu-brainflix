import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={CurrentVideo}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
