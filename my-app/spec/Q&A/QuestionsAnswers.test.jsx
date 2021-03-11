import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionsAnswers from '../../src/questionsAndAnswers/QuestionsAnswers';
import SearchForAnswers from '../../src/questionsAndAnswers/SearchForAnswers';
import Display from '../../src/questionsAndAnswers/Display';
import MoreAnsweredQuestions from '../../src/questionsAndAnswers/MoreAnsweredQuestions';
import AddQuestion from '../../src/questionsAndAnswers/AddQuestion';

configure({ adapter: new Adapter() });
/* eslint-disable */

describe('Component Test', function() {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<QuestionsAnswers />, div);
  })

  it('renders a <SearchForAnswers /> component', () => {
    const wrapper = shallow(<QuestionsAnswers />);
    expect(wrapper.find(SearchForAnswers)).toHaveLength(1);
  })

  it('renders a <Display /> component', () => {
    const wrapper = shallow(<QuestionsAnswers />);
    expect(wrapper.find(Display)).toHaveLength(1);
  })

  it('renders a <MoreAnsweredQuestions /> component', () => {
    const wrapper = shallow(<QuestionsAnswers />);
    expect(wrapper.find(MoreAnsweredQuestions)).toHaveLength(1);
  })

  it('renders a <AddQuestion /> component', () => {
    const wrapper = shallow(<QuestionsAnswers />);
    expect(wrapper.find(AddQuestion)).toHaveLength(1);
  })
})