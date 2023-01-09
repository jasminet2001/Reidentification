import './App.css';
import VideoComponent from './components/feature-2/VideoComponent';
import UploadComponent from './components/feature-2/UploadComponent';
import DoubleVidComponent from './components/Feature-1/DoubleVidComponent'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/redirect-video">
            <VideoComponent></VideoComponent>
          </Route>
          <Route path="/upload-file">
            <UploadComponent></UploadComponent>
          </Route>
          <Route path="/video">
            <DoubleVidComponent></DoubleVidComponent>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
