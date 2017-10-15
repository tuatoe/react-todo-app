var React = require('react');
var Todo = require('./Todo');

class App extends React.Component{
    render(){
        return (
            <div className="container text-center">
               <h1>Todo App</h1>
               <Todo />
            </div>
        );
    }
}

module.exports = App;