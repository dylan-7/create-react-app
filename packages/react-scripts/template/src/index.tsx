import * as React from 'react';
import dva, { SubscriptionAPI } from 'dva';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/home/Home';
import './assets/styles/app.scss';

const app = dva({
  history: createBrowserHistory()
});

const router = ({ history }: SubscriptionAPI) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

app.router(router);
app.start(document.getElementById('root'));
registerServiceWorker();

// hot module replace
// tslint:disable-next-line:no-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-any
  (module as any).hot.accept('./pages/home/Home', () => {
    app.router(router);
    app.start(document.getElementById('root'));
  });
}
