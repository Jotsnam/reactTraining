import React,{Component} from 'react'

class userLists extends Component {
    createUserList(){
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
                {this.createUserList()}
                </div>
        ) 
        
    }
}

export default userLists;
// export default function(){
//     return this.props.users.map((user) => {
//         return(
//             <li key = {user.id}>
//             {user.name} {user.address}
//             </li>
//         );
//     })
// }