import './App.css';
import VideoComponent from './components/feature-2/VideoComponent';
import UploadComponent from './components/feature-2/UploadComponent';
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
