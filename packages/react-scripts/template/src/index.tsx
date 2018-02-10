import * as React from 'react';
import dva, { SubscriptionAPI } from 'dva';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/home/Home';
import 'antd/dist/antd.less';

const app = dva({
  history: createBrowserHistory()
});

app.router(({ history }: SubscriptionAPI) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </ConnectedRouter>
  );
});
app.start(document.getElementById('root'));
registerServiceWorker();
