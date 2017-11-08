import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome'

class Next extends Component{
    render(){
        return(
            <div>
            <h3>Welcome</h3>
            <Welcome name = "Duplicate"/>
            </div>
        );
    }
}

export default Next