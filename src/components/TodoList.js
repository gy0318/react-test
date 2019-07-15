import React,{Component} from 'react';
import './TodoList.css';
export default class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            TodoList:[
                {name:'吃饭',state:'todo-will'},
                {name:'睡觉',state:'todo-will'},
                {name:'打豆豆',state:'todo-will'}
            ],
            value:''
        }
    }
    changeValue(){
        let todo = this.refs.add.value;
        this.setState({
            value:todo
        })
    }
    deleteTodo(index){
        let {TodoList} = this.state;
        TodoList.splice(index,1);
        this.setState({
            TodoList
        });
    }
    finishTodo(todoIndex){
        let {TodoList} = this.state;
        TodoList.filter((item,index) => {
            return item.state = (index === todoIndex) ?  "todo-done" :  item.state
        });
        this.setState({
            TodoList
        });
    }
    addTodo(){
        let TodoList = this.state.TodoList,
            item = {
                name:this.refs.add.value,
                state:'todo-will'
            }
        TodoList.unshift(item);
        this.setState({
            TodoList,
            value:''
        })
    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.TodoList.map((item,index) => {
                        return (
                            <li  className="todo-text" key={index}>
                            {/* todo-done | todo-will */}
                                <span className={`${item.state}`} onClick={this.finishTodo.bind(this,index)}>{item.name}</span>
                                <button  className="delete" onClick={this.deleteTodo.bind(this,index)}>删除</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <input className="addInput" ref="add" value={this.state.value} onChange={this.changeValue.bind(this)}/>
                    <button className="addButton" onClick={this.addTodo.bind(this)}>add</button>
                </div>
            </div>
        )
    }

}