import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux **
import { Provider } from 'react-redux';
import store from './store';
import App from "./components/app";

// Pages
import AssetMaster from './components/pages/AssetMaster'
import CategoryMaster from './components/pages/CategoryMaster'
import ComponentMaster from './components/pages/ComponentMaster'

const Root = () => {

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                    <Switch>
                        <App>
                            <Route path={`/master/category_master`} component={CategoryMaster} />
                            <Route path={`/master/component_master`} component={ComponentMaster} />
                            <Route path={`/master/asset_master`} component={AssetMaster} />
                        </App>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();