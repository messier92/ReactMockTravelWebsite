import { render } from "@testing-library/react";
import React, {Component} from "react";
import {withRouter} from "react-router";

class Main extends Component {
    constructor (props) {
        super(props);
        this.state={
            username:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:3030/customers?username=${encodeURIComponent(this.state.username)}`, {
            method: 'GET', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            if(JSON.stringify(data[0].password === this.state.password)) {
                // password match
                localStorage.setItem('validUser', this.state.username);
                this.props.history.push('/');
            } else {
                console.log("Invalid login");
            }
        })
        .catch(err => console.log("Error: " + err))
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })        
    }

    render() {
        return(
            <main>
            <h2>Login to participate</h2>     
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="username" onChange={this.handleFieldChange}/>
                    </label>                    
                </div>
                <div>
                    <label>
                        Password:
                        <input type="text" name="password" onChange={this.handleFieldChange}/>
                    </label>                    
                </div>
                <div>
                    <input type="submit" value="Submit"/>                   
                </div>
            </form>
        </main>
        )
    };
};

export default withRouter(Main);