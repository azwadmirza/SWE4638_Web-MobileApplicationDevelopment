import React from "react";
import Button from "./Button";

class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {items:[],currentID:0,todo:{title:"",description:""}};
        document.title = '0 Tasks Added';
    }

    addItem = (e) => {
        e.preventDefault();
        const {todo,currentID,items} = this.state;
        console.log(todo);
        this.setState({
            items: this.state.items.concat({todo,id:currentID+1}),
            currentID:currentID+1,
        });
        document.title=`${items.length+1} Tasks Added`;
        
    }

    render(){
        const {title,description} = this.state.todo;
        return (
            <div>
                <h1>ToDo List</h1>
                <ul>
                    {this.state.items.map((item) => (
                        <li key={item.id}>{item.todo.title}:={item.todo.description}</li>
                    ))}
                </ul>
                <form>
                    <input type="text" name="title" value={this.state.todo.title} onChange={(e)=>this.setState({todo:{title:e.target.value,description:description}})}/>
                    <input type="text" name="description"  value={this.state.todo.description}  onChange={(e)=>this.setState({todo:{title:title,description:e.target.value}})}/>
                    <Button handleSubmit={this.addItem} title={this.state.title} description={this.state.description}/>
                </form>
            </div>
        )
    }


}

export default ToDo;