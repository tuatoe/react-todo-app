var React = require('react');
var TodoForm = require('./TodoForm');

class Todo extends React.Component{
    render(){
        return (
            <TodoForm />
        );
    }
}

module.exports = Todo;