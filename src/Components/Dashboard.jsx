import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import {
    getUsers, deleteUser
} from "../Actions/dashboard.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    getusersThunk: () => dispatch(getUsers()),
    deleteUserThunk: (id) => dispatch(deleteUser(id))
});

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = async () => {
        this.props.getusersThunk();
    }

    deleteUser = (id) => {
        const ans = window.confirm("Are you sure you want to delete user?");
        if (ans === true) {
            this.props.deleteUserThunk(id)
            alert("user deleted successfully.")
            this.props.getusersThunk();
        }
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Dashboard</a>
                </nav>
                <div className="container-fluid">
                    <h1>Dashboard</h1>
                    <div className="container" >
                        <div className="row" id="rowDisplay">
                            <div style={{ float: "right", width: "100%" }}>
                                <h3>User List</h3>
                                <Link to={"/user/"}  >
                                    <button style={{ float: "right" }} type="button" className="btn btn-primary" >Add New</button>
                                </Link>
                            </div>
                        </div>
                        <div className="row table-wrapper-scroll-y table-scroll">
                            <Table responsive="true" className="table table-hover table-bordered" id="tblData">
                                <Thead className="thead-light">
                                    <Tr>
                                        <Th>Id</Th>
                                        <Th>Name</Th>
                                        <Th>Username</Th>
                                        <Th>Email</Th>
                                        <Th>City</Th>
                                        <Th>Edit</Th>
                                        <Th>Delete</Th>
                                    </Tr>
                                </Thead>
                                {this.props.users.users && this.props.users.users.length >= 0 &&
                                    this.props.users.users.map((user, id) => (
                                        <Tbody key={id}>
                                            <Tr>
                                                <Td>{user.id}</Td>
                                                <Td>{user.name}</Td>
                                                <Td>{user.username}</Td>
                                                <Td>{user.email}</Td>
                                                <Td>{user.address.city}</Td>
                                                <Td>
                                                    <Link to={"/user/" + user.id}><button
                                                        type="button"
                                                        className="btn btn-warning btn-sm m-0"
                                                        id="btnEdit">
                                                        Edit
                                                </button></Link> </Td>
                                                <Td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-sm m-0"
                                                        id="btnDelete" onClick={() => this.deleteUser(user.id)} >
                                                        Delete
                                                  </button>
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    ))}
                            </Table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
