import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddAnswerModal from '../../src/questionsAndAnswers/AddAnswerModal';
import Question from '../../src/questionsAndAnswers/Question';

configure({ adapter: new Adapter() });
/* eslint-disable */

describe('Component Test', function() {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Question />, div);
  })
  it('renders a <AddAnswerModal /> component', () => {
    const wrapper = shallow(<Question />);
    expect(wrapper.find(AddAnswerModal)).toHaveLength(1);
  })
  it('calls loadTwo when clicked', () => {
    const wrapper = shallow(<Question />);
    wrapper.find('loadAll Button').simulate('click');
    expect(this.loadAll).to.have.been.called;
  })
})