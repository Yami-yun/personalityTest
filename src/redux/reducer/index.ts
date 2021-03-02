import { combineReducers } from 'redux';
import destroy from './destroyReducer';


const rootReducer = combineReducers({
    destroy,
})

export default rootReducer;