var React = require('react');
var TodoItem = require('./TodoItem');

var TodoList = function(props){
    var todoList = [];
    var todos = props.todos;
    
    for(var i = 0; i < todos.length; i++){
    todoList.push(
        <TodoItem 
          key={todos[i].id} 
          todoItem = {todos[i]}
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