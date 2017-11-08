import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Welcome extends Component{

    constructor(props){
        super(props)
        this.state = {age : 0} ;
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        console.log("event.target",event.target)
        this.setState({age : event.target.value})
    }

    render(){
        return (
        <div>
            <p>
            {this.props.name}
            <input type = "text" value = {this.state.age} onChange = {this.handleChange}/>
            {this.state.age}
            </p>
        </div>
        );
    }
}

export default Welcome