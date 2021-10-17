import * as actions from './actions';
import { CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
   } from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleWare]);

it('should create an action to search robots', ()=>{
    const text = 'hi';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requestRobot api', ()=>{
   const store = mockStore();
   store.dispatch(actions.requestRobots())
   const action = store.getActions();
   console.log('action', action)
   const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
}
expect(action[0]).toEqual(expectedAction)
})

it('handles REQUEST_ROBOTS_SUCCESS', ()=>{
    const store = mockStore();
    const link = 'https://jsonplaceholder.typicode.com/users'
    return store.dispatch(actions.requestRobots(link))
       .then(()=>{
          const action = store.getActions();
          console.log('action 2', action);
          const expectedAction = {
              type: REQUEST_ROBOTS_SUCCESS,
          }
          expect(action[0].type).toEqual('REQUEST_ROBOTS_PENDING');
          expect(action[1].type).toEqual(expectedAction.type);
      })
    
})

it('handles REQUEST_ROBOTS_FAILED', ()=>{
    const store = mockStore();
    const incorrectLink = 'abc';
    expect.assertions(2)
    return store.dispatch(actions.requestRobots(incorrectLink))
       .then(()=>{
          const action = store.getActions();
          console.log('action 3', action);
          const expectedAction = {
              type: REQUEST_ROBOTS_FAILED,
          }
          expect(action[0].type).toEqual('REQUEST_ROBOTS_PENDING');
          expect(action[1].type).toEqual(expectedAction.type);
      })  
})
