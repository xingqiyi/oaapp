import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Drawer from '../index';

describe('Drawer', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={<span>sidebar content</span>}
        position="left"
        open={false}
      >
        Click upper-left corner icon
      </Drawer>,
    );
    expect(wrapper.find('.my-drawer')).toHaveLength(1);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('check open/close state', () => {
    function onOpenChange(arg) {
      expect(arg).toBe(false);
    }
    // 注意：如果用 enzyme 的 shallow 方法、setProps 不起作用，
    // 也许是代码都是在 rc-drawer 里的缘故？（比如 Button 组件 shallow + setProps 是正常的）
    const wrapper = mount(
      <Drawer
        sidebar={<span>sidebar content</span>}
        position="left"
        open={false}
        onOpenChange={onOpenChange}
      >
        Click upper-left corner icon
      </Drawer>,
    );
    expect(wrapper.find('.am-drawer-open')).toHaveLength(0);
    wrapper.setProps({ open: true });
    expect(wrapper.find('.am-drawer-open')).toHaveLength(1);
    wrapper.find('.am-drawer-overlay').simulate('click');
  });
});
