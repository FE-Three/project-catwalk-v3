import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../../src/questionsAndAnswers/Display';
import Question from '../../src/questionsAndAnswers/Question';

configure({ adapter: new Adapter() });
/* eslint-disable */

describe('Component Test', function() {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Display />, div);
  })
  it('renders a <Question /> component', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find(Question)).toHaveLength(1);
  })
})