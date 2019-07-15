import App from './App'
import React from 'react'
import {expect} from 'chai';
import {shallow,render,mount } from 'enzyme'

describe('Enzyme Shallow', function () {
    it('App\'s title should be Todos', function () {
    // shallow方法浅渲染的虚拟DOM对象，然后app.find方法找出h1元素，text方法取出该元素的文本
      let app = shallow(<App/>);
    //   find方法只支持简单选择器
      expect(app.find('#title').text()).to.equal('Todos');
    });
});


/**
 * render方法将React组件渲染成静态的HTML字符串，分析HTML代码的结构，返回一个对象
 */
describe('Enzyme Render', function () {
    it('Todo item should not have todo-done class', function () {
      let app = render(<App/>);
    //测试TODO项的初始状态
      expect(app.find('.todo-done').length).to.equal(0);
    });
});  

/**
 * mount 方法用于将React组件加载为真实DOM节点，用于测试元素上的点击事件
 */
describe('Enzyme Mount', function () {
    it('Delete Todo', function () {
      let app = mount(<App/>);
      let todoLength = app.find('li').length;
      //find方法返回一个对象，包含了所有符合条件的子组件。
      // 在它的基础上，at方法返回指定位置的子组件，simulate方法就在这个组件上触发某种行为
      app.find('button.delete').at(0).simulate('click');
      expect(app.find('li').length).to.equal(todoLength - 1);
    });
}); 

describe('Enzyme Mount', function () {
    it('Add a new Todo', function () {
      let app = mount(<App/>);
      let todoLength = app.find('li').length;
      app.find('.addButton').simulate('click');
      expect(app.find('li').length).to.equal(todoLength + 1);
    });
});
