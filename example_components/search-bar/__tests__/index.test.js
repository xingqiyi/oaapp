import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import SearchBar from '../index';

describe('SearchBar', () => {
  it('renders correctly', () => {
    const wrapper = render(<SearchBar placeholder="搜索" />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  describe('test some events', () => {
    let handler;
    let wrapper;

    beforeEach(() => {
      handler = jest.fn();
    });

    it('fires onChange event', () => {
      wrapper = mount(<SearchBar onChange={handler} />);
      wrapper.find('input').simulate('change', { target: { value: 'foo' } });
      expect(handler).toBeCalledWith('foo');
    });

    it('fires onFocus event', () => {
      wrapper = mount(<SearchBar onFocus={handler} />);
      wrapper.find('input').simulate('focus');
      expect(handler).toBeCalledWith();
    });

    it('fires onBlur event', () => {
      wrapper = mount(<SearchBar onBlur={handler} />);
      wrapper.find('input').simulate('blur');
      expect(handler).toBeCalledWith();
    });

    it('fires onCancel event', () => {
      wrapper = mount(<SearchBar value="test" onCancel={handler} />);
      wrapper.find('.am-search-cancel').simulate('click');
      expect(handler).toBeCalledWith('test');
    });

    it('fires onClear event', () => {
      wrapper = mount(<SearchBar onClear={handler} />);
      wrapper.find('a').simulate('click');
      expect(handler).toBeCalledWith('');
    });
  });
});
