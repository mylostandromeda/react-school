import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import './MonthBar.scss';

class MonthBar extends React.Component {

    getColor(){
        const {users} = this.props;
        let color;
        if(users.length <= 2) {
            color = "#bdc3c7";
        } else if (users.length >= 3 && users.length <= 6) {
            color = "#3498db";
        } else if (users.length >= 7 && users.length <= 10) {
            color = "#2ecc71";
        } else if (users.length >= 11) {
            color = "#e74c3c";
        }

        return color;
    }
    render(){
        return(
            <Tippy
                className="tooltip"
                content={this.props.users.map(user => (
                    <div key={user.id}>{user.firstName + " " + user.lastName}</div>
                ))}
            >
                <div className="months-bar" style={{backgroundColor: this.getColor()}}>
                    {this.props.title}
                </div>
            </Tippy>
        )
    }
}

export default MonthBar;