var React = require('react');

//var TodoItem = function(props){
//    return(
//        <li className="list-group-item">
//            <h3>
//                {props.todo}
//        
//                <button 
//                    className="btn btn-default btn-danger pull-right"
//                    onClick={props.onDeleteBtnClick}
//                    value={props.index}
//                    >Delete</button>
//            </h3>
//        </li>
//    );
//};
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            priority: 0
        }
        
        this.handlePriorityBtnClick = this.handlePriorityBtnClick.bind(this);
    }
    
    handlePriorityBtnClick(){
        this.setState(function(prevState){
           return{
               priority: prevState.priority + 1
           } 
        });
    }
    render(){
        return(
        <li className="list-group-item">
            <h3>
                <button className="pull-left" onClick={this.handlePriorityBtnClick}>{this.state.priority}</button>
                {this.props.todo}
        
                <button 
                    className="btn btn-default btn-danger pull-right"
                    onClick={this.props.onDeleteBtnClick}
                    value={this.props.index}
                    
                    >Delete</button>
            </h3>
        </li>
    );
    }
}
module.exports = TodoItem;