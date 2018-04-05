import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) =>({
  type:'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) =>({
  type:'DECREMENT',
  decrementBy
});

const resetCount = () =>({type:'RESET'});
const setCount = ({ count = 101} = {}) =>({
  type:'SET',
  count
});



const countReducer = (state = {count:0}, action )=>{
  switch(action.type){
    case 'INCREMENT':
      return{
        count:state.count + action.incrementBy
      }
    case 'DECREMENT':
      const DECREMENT = typeof action.decrementBy==='number'?action.decrementBy:1;
      return{
        count:state.count-DECREMENT
      }
    case 'RESET':
      return{
        count:0
      }
    case 'SET':
      return{
        count:action.count
      }
    default:
      return state;
  }
};


const store = createStore(countReducer());

const unsubscribe= store.subscribe(()=>{
  console.log(store.getState());
});

//store.subscribe(()=>{
//  console.log('hola');
//});

store.dispatch(incrementCount({ incrementBy:5}));
store.dispatch(incrementCount({ incrementBy:5}));

//store.dispatch(incrementCount());
//unsubscribe();

store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy:2}));
store.dispatch(setCount());
store.dispatch(setCount({count:'222'}));


