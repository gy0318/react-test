import App from './App'
import React from 'react'
import {expect} from 'chai';
import {shallow,render,mount } from 'enzyme'
/**
 * shallow 方法返回App的浅渲染，测试App组件的显示，与子组件无关
 * render  方法将React组件渲染成静态的HTML字符串，分析HTML代码的结构，返回一个对象，测试TODO项的初始状态
 * mount 方法用于将React组件加载为真实DOM节点，用于测试元素上的点击事件
 * find方法返回一个对象，包含所有符合条件的子组件
 * at方法返回指定位置的子组件
 * simulate方法就在这个组件上触发某种行为
 */
describe('Enzyme Shallow', function () {
    it('App\'s title should be Todos', function () {
      let app = shallow(<App/>);
    //   find方法只支持简单选择器
    //   expect(app.find('h1').text()).to.equal('Todos');
    //   expect(app.find('.title').text()).to.equal('Todos');
      expect(app.find('#title').text()).to.equal('Todos');
    });
});
describe('Enzyme Render', function () {
    it('Todo item should not have todo-done class', function () {
      let app = render(<App/>);
      expect(app.find('.todo-done').length).to.equal(0);
    });
});


describe('Enzyme Mount', function () {
    it('Delete Todo', function () {
      let app = mount(<App/>);
      let todoLength = app.find('li').length;
      app.find('button.delete').at(0).simulate('click');
      expect(app.find('li').length).to.equal(todoLength - 1);
    });
});
describe('Enzyme Mount', function () {
    it('Add a new Todo', function () {
      let app = mount(<App/>);
      let todoLength = app.find('li').length;
      let addInput = app.find('input').first();
      addInput.value = 'addTodo';
      app.find('.addButton').simulate('click');
      expect(app.find('li').length).to.equal(todoLength + 1);
    });
});
