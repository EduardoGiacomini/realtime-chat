import {createStore} from 'redux'
import {combineReducers} from 'redux'
import {setUser} from './reducers'

const reducers = combineReducers({
    user: setUser
});

const store = createStore(
    reducers,
    // TODO
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
