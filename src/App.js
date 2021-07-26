import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Uploads from './components/Uploads/Uploads'
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/videos/:id' component={Home}/>
          <Route path='/uploads' component = {Uploads}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
