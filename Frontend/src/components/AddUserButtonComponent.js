import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    
class AddUserButtonComponent extends Component {
    render() {
        if(this.props.mainState) {
            return(
                <Router>
                    <div>
                        <button>
                            <Link to="/add">Add User</Link>
                        </button>
                        <Route path="/add" component={AddEditFormComponent} />
                    </div>
                </Router>
            )
            } else {
                return null
            }
            
        }
    }
    
    export default AddUserButtonComponent;