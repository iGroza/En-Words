import { createStore, applyMiddleware } from "redux";
import app from './application/reducer'
import thunk from 'redux-thunk'

const middleware = [thunk];

export default createStore(
    app,
    applyMiddleware(...middleware)
)

