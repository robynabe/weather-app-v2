// App Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Locations from '../components/Locations';

function AppRouter() {
  
  return (
    <Router>
      <div className="wrapper">
        <Header />
          <Switch>
              <Route path={'/'} exact><Main /></Route>
              <Route path={'/my-locations'}><Locations /></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;