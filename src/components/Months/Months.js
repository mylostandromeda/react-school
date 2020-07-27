import React from 'react';
import './Months.scss';
import MonthBar from '../MonthBar/MonthBar';


class Months extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
        }
    }

    getUserMonth(users, month){
        let usersList = users.filter(user => {
            let date = new Date(user.dob);
            return month === date.getMonth();
        });

        return usersList;
    }

    render() {
        const {months} = this.state;
        return (
            <div className="months">
                {months.map((month,index) => (
                    <MonthBar title={month} key={index} users={this.getUserMonth(this.state.users, index)}/>
                ))}
            </div>
        )
    }
}

export default Months;