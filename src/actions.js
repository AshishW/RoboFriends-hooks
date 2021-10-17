import { CHANGE_SEARCH_FIELD, 
        REQUEST_ROBOTS_PENDING, 
        REQUEST_ROBOTS_SUCCESS, 
        REQUEST_ROBOTS_FAILED
       } from './constants';
import { apiCall } from './api/api';

export const setSearchField=(text)=>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
}) //notice here its =>({...}) this is way to directly return the object
export const requestRobots = (link = 'https://jsonplaceholder.typicode.com/users') => (dispatch) =>{
   dispatch({type: REQUEST_ROBOTS_PENDING});
    return apiCall(link)
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}
//redux-thunk middleware checks if the action is returning any function. If so, then the action is async.