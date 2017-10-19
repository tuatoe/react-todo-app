var React = require('react');
var TodoItem = require('./TodoItem');

var TodoList = function(props){
    var todoList = [];
    var todos = props.todos;
    
    for(var i = 0; i < todos.length; i++){
    todoList.push(
        <TodoItem 
          todo={todos[i].todo} 
          key={todos[i].id} 
          id={todos[i].id}
          completed={todos[i].completed}
          onDeleteBtnClick={props.onDeleteBtnClick}
          onCheckboxClick={props.onCheckboxClick}
        />
        );
    }
    
    return(
         <ul className="list-group">
           {todoList}
         </ul>             
     );
};
    
module.exports = TodoList;