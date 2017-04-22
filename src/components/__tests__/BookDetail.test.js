import React from 'react';
import { mountWithIntl } from '../../intl-enzyme';
import toJson from 'enzyme-to-json';

import BookDetail from '../BookDetail';

describe('BookDetail', () => {
    it('renders', () => {
        const wrapper = mountWithIntl(<BookDetail match={{params:{bookId: 1}}} />);
        expect(toJson(wrapper)).toMatchSnapshot();
   });
});