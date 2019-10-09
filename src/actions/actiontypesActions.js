import {HOME_STATUS, NEWS_STATUS, GUARDIAN_STATUS, WIKI_STATUS} from './actiontypes'

export const isHome = (toggled) => dispatch =>{
    dispatch({type: HOME_STATUS, payload: toggled});
}

export const isNews = (toggled) => dispatch => {
    dispatch({type: NEWS_STATUS, payload: toggled});
}

export const isGuardian = (toggled) => dispatch => {
    dispatch({ type: GUARDIAN_STATUS, payload: toggled});
}

export const isWiki = (toggled) => dispatch => {
    dispatch({ type: WIKI_STATUS, payload: toggled});
}