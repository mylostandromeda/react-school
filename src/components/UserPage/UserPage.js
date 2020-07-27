import React from 'react';
import Months from './../Months/Months';
import {getUsers} from '../../services/userService';

class UserPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
      getUsers()
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                }
            ).catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

    render(){
        const {error, isLoaded} = this.state;
        if(error) {
            return <p>Error {error.message} </p>
        } else if (!isLoaded) {
            return <p> Loading...</p>
        } else {
            return (
                <Months users={this.state.users}/>
            )
        }
    }
}


export default UserPage;