import { render } from "@testing-library/react";
import React, {Component} from "react";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCustomers: []
        }
    }

    render(){
        return(
            <main>
                <h2>Customers List</h2>
                {
                    this.state.allCustomers.map((user, i) => (
                        <div key={i}>
                            {user.username}&nbsp;{user.password}
                        </div>
                    ))
                }
            </main>
        )
    }

    componentDidMount() {
        fetch("http://localhost:3030/customers")
        .then((data)=>{
            return(data.json())
        })
        .then((users)=>{
            this.setState({
                allCustomers: users
            })
        });        
    }
}

export default Main;