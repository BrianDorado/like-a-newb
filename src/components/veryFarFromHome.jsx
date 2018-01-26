import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class veryFarFromHome extends Component {
    render() {
        return (
            <div>
                <Link to ='/'>Home</Link>
            </div>
        );
    }
}

export default veryFarFromHome;