import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Accordion from '../index';

describe('Accordion', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Accordion>
        <Accordion.Panel header="标题一">
          内容一
        </Accordion.Panel>
        <Accordion.Panel header="标题二">
          内容二
        </Accordion.Panel>
      </Accordion>,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.am-accordion')).toHaveLength(1);
  });

  it('renders accordion prop correctly', () => {
    const wrapper = mount(
      <Accordion accordion>
        <Accordion.Panel header="标题一">
          内容一
        </Accordion.Panel>
        <Accordion.Panel header="标题二">
          内容二
        </Accordion.Panel>
      </Accordion>,
    );
    // accordion props make only one active panel
    wrapper.find('.am-accordion-header').at(0).simulate('click');
    wrapper.find('.am-accordion-header').at(1).simulate('click');
    expect(wrapper.find('.am-accordion-item').at(1).hasClass('am-accordion-item-active')).toBe(true);
  });
});
