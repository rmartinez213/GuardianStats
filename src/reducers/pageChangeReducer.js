import {HOME_STATUS, NEWS_STATUS, GUARDIAN_STATUS, WIKI_STATUS} from '../actions/actiontypes'

const initialState = {
    home: true,
    news: false,
    guardian: false,
    wiki: false
}

const pageChangeReducer = (state = initialState, action) => {
    switch(action.type){
        case HOME_STATUS:
            return {...state, home: action.payload};
        case NEWS_STATUS:
            return {...state, news: action.payload};
        case GUARDIAN_STATUS:
            return { ...state, guardian: action.payload };
        case WIKI_STATUS:
            return { ...state, wiki: action.payload };
        default:
            return state;
    }
}

export default pageChangeReducer;