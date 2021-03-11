import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoreReviewsButton from '../../src/Ratings&Reviews/MoreReviewsButton';

configure({ adapter: new Adapter() });

describe('Component Test', function() {
  it ('renders the More Reviews button', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MoreReviewsButton />, div);
  })
})