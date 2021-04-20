import { Switch, Route, Redirect } from 'react-router';

import Home from './components/Home';
import User from './components/User';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={User} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;