var React = require('react');

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    handleFormSubmit(evt){
        debugger;
    }
    
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" placeholder="Add Todo Item" />
            </form>
        );
    }
}

module.exports = TodoForm;