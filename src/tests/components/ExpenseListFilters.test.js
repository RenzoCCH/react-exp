import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilters, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilters = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilters}
    sortByDate = {sortByDate}
    sortByAmount = {sortByAmount}
    setStartDate = {setStartDate}
    setEndDate = {setEndDate}
  />);
});

test('should render ExpenseListFilters correctly',() => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters  with alt data correctly',() => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();

});

test('should handle text change',() => {
  const value = 'new value';
  wrapper.find('input').at(0).simulate('change',{
    target:{ value }
  });
  expect(setTextFilters).toHaveBeenLastCalledWith(value);
});

test('should sort by date',() => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change',{
    target:{ value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount',() => {
  const value = 'amount';
  wrapper.find('select').simulate('change',{
    target:{ value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('shoud handle date changes',() => {
  const dates = {
    startDate:moment(0),
    endDate:moment(0).add(4,'days')
  };
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(dates)

  expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);

});

test('should handle date focus changes',() => {
  const focused = 'startDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
  expect(wrapper.state('calendarFocused')).toBe(focused);
});

