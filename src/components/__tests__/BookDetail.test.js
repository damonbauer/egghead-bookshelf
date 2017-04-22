import React from "react";
import { mountWithIntl, shallowWithIntl } from "../../intl-enzyme";
import toJson from "enzyme-to-json";

import BookDetail from "../BookDetail";

let wrapper = null;

describe('BookDetail', () => {
  beforeEach(() => {
    wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
  });

  it('renders', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('intl messages', () => {
    beforeEach(() => {
      wrapper = shallowWithIntl(<BookDetail match={{params: {bookId: 1}}}/>).first().shallow();
    });

    it('renders a single "purchase" message', () => {
      expect(wrapper.find({id: 'detail.purchase'})).toHaveLength(1);
    });

    it('passes number of merchants to "new window" message', () => {
      expect(wrapper.find({id: 'detail.window'}).prop('values')).toMatchObject({
        numMerchants: 3
      });
    });
  });
});
