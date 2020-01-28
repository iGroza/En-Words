import { createStore, applyMiddleware } from "redux";
import app from './application/reducer'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

export default createStore(
    app,
    applyMiddleware(...middleware)
)

