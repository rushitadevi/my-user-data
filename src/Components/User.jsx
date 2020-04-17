import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import {
    getUsers, AddUser, getUserById, updateUser
} from "../Actions/dashboard.js";

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    getusersThunk: () => dispatch(getUsers()),
    AddUserThunk: (state) => dispatch(AddUser(state)),
    getUserByIdThunk: (id) => dispatch(getUserById(id)),
    updateUserThunk: (id, state) => dispatch(updateUser(id, state))
});

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            user: {
                name: "",
                username: "",
                email: "",
                id: 0,
                address: {
                    city: ""
                }
            },
            alertMessage:undefined
        }
    }
    
    componentDidMount = async () => {
        let id = this.props.match.params.id
        if (id !== undefined)
            await this.props.getUserByIdThunk(id)            
    }

    addData = (input) => {
        let newuser = this.state.user; //we are taking one object here
        if (this.props.match.params.id === undefined) {
            let id = parseInt(this.props.users.users.length)
            newuser.id = id + 1
        }
        let currentValue = input.currentTarget.value
        let currentId = input.currentTarget.id

        if (currentId === "name") {
            newuser.name = currentValue
        }
        else {
            newuser.name = document.getElementById("name").value
        }
        if (currentId === "username") {
            newuser.username = currentValue
        }
        else {
            newuser.username = document.getElementById("username").value
        }

        if (currentId === "email") {
            newuser.email = currentValue
        }
        else {
            newuser.email = document.getElementById("email").value
        }
        if (currentId === "city") {
            newuser.address.city = currentValue
        }
        else {
            newuser.address.city = document.getElementById("city").value
        }
        this.setState({
            user: newuser
        })
    }

    addUser = (e) => {
        e.preventDefault();
        if (this.props.match.params.id !== undefined) {
            this.addData(e)
            this.props.updateUserThunk(this.props.match.params.id, this.state.user)
            this.props.history.push("/")
        }
        else {
            const ans = window.confirm("user added successfully.");
            if(ans===true)
            {
                this.props.AddUserThunk(this.state.user)            
                this.setState({
                    alertMessage:"success"
                })
            }
            else{
               
            }
        }
    }

    render() {
        return (
            <>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="/">Dashboard</a>
                </nav>
                <div className="container-fluid">
                    <h1>Dashboard</h1>
                    <div className="container" >
                        <div className="row" id="rowDisplay">
                            <div>
                                <h3>Form</h3>
                            </div>
                            <div style={{ float: "right" }}>

                            </div>
                        </div>
                        <div className="row">
                            <form onSubmit={(e) => this.addUser(e)}>
                                <div className="form-group">
                                    <label >Name</label>
                                    <input type="text" required className="form-control" onChange={this.addData}
                                        id="name" placeholder="Name" defaultValue={this.props.users.users.name} />
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="text" required className="form-control" onChange={this.addData}
                                        id="email" placeholder="Email" defaultValue={this.props.users.users.email} />
                                </div>
                                <div className="form-group">
                                    <label >Username</label>
                                    <input type="text" className="form-control" onChange={this.addData}
                                        id="username" defaultValue={this.props.users.users.username} placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label >City</label>
                                    <input type="text" className="form-control" onChange={this.addData}
                                        id="city" placeholder="City" />
                                </div>
                                <div className="form-group">
                                    <button type="submit"
                                        className="btn btn-success">Submit</button>
                                    <Link to={"/"} >
                                        <button type="cancel" id="btnCancel" className="btn btn-outline-danger">Cancel</button>
                                    </Link>
                                </div>
                                {this.state.alertMessage==="success" &&
                                <div class="alert alert-success" role="alert">
                                User added successfully.
                              </div> && this.props.history.push("/") }
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(User);