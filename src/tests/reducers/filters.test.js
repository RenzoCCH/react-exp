import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined,{
    type:'@@INIT'
  });
  expect(state).toEqual({
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount',() => {
  const state = filtersReducer(undefined, {
    type:'SORT_BY_AMOUNT'
  });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy date',() => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy:'amount'
  };
  const action = {
    type:'SORT_BY_DATE'
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');

});

test('should set Text filter',() => {
  const state = filtersReducer(undefined,{
    type:'SET_TEXT_FILTER',
    text: 'hi'
  });
  expect(state.text).toBe('hi');
});

test('should set start date filter',()=> {
  const state = filtersReducer(undefined,{
    type: 'SET_START_DATE',
    date: moment(0)
  });
  expect(state.startDate).toEqual(moment(0));
});

test('should set end date filter',()=> {
  const state = filtersReducer(undefined,{
    type: 'SET_END_DATE',
    date: moment(0)
  });
  expect(state.endDate).toEqual(moment(0));
});
//Filters reducer
//const filtersReducerDefaultState = {
//  text:'',
//  sortBy:'date',
//  startDate:moment().startOf('month'),
//  endDate:moment().endOf('month')
//}
//
//export default (state = filtersReducerDefaultState, action = {})=>{
//  switch (action.type) {
//    case 'SET_TEXT_FILTER':
//      return {...state, text:action.text};
//    case 'SORT_BY_DATE':
//      return {...state, sortBy:'date'};
//    case 'SORT_BY_AMOUNT':
//      return {...state, sortBy:'amount'};
//    case 'SET_START_DATE':
//      return {...state, startDate:action.date};
//    case 'SET_END_DATE':
//      return {...state, endDate:action.date};
//    default:
//      return state;
//  }
//};
