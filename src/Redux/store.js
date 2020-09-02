import {createStore,combineReducers,applyMiddleware,compose} from 'redux'

import appReducer from './app/reducer'
import authReducer from './auth/reducer'

const rootReducer = combineReducers({
    app:appReducer,
    auth:authReducer
});

const logger = state => next => action => {
    console.log(' dispatching the action 1 ', action);
    return next(action);
}
const logger2 = state => next => action => {
    console.log(' dispatching the action 2 ', action);
    const returnValue = next(action);
    // if you want to log some information after the change
    console.log('state after action is', store.getState())
    return returnValue
}

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(
    rootReducer, 
    createComposer(
        applyMiddleware(
            logger,
            logger2
        )
    )
)
