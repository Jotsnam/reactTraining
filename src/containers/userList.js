import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import {SelectUser} from '../Actions/index'
// import userLists from '../components/userLists'

class userList extends Component{
    //To display the list sent to it
    createUserList(){
        console.log(this.props.users)
        return this.props.users.map((user) => {
            return(
                <li key = {user.id}>
                {user.name} {user.address}
                </li>
            );
        })
    }
    render(){
        return (
            <div>
                <ul>
                {this.createUserList()}
                </ul>
            </div>
        );
    }
}

function mapStatetoProps(state){
    return {users : state.users}
}

// function mapDispatchtoProps(dispatch){
//     return bindActionCreators({selectedUser : SelectUser}, dispatch)
// }

export default connect(mapStatetoProps)(userList)

// export default connect(mapStatetoProps,mapDispatchtoProps)(userList)
