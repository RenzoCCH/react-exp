import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('set text filter default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: ''
  });
});

test('set start date', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    date: moment(0)
  });
});

test('set end date', () => {
  const m  = moment();
  const action = setEndDate(m);
  expect(action).toEqual({
    type:'SET_END_DATE',
    date: m
  });
});

test('set text filter', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: 'test'
  });
});


test('set sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type:'SORT_BY_DATE'
  });
});

test('set sort by amoun', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
  });
});

