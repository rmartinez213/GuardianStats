import { combineReducers } from 'redux';
import pageChangeReducer from './pageChangeReducer';

export default combineReducers(
    {
        pages: pageChangeReducer
    }
)