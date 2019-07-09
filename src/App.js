import React,{Component} from 'react';
import TodoList from './components/TodoList';
export default class App extends Component {
    render() {
      return (
        <div>
            <h1 id="title">Todos</h1>
            <TodoList/>
        </div>
      )
    }
}
