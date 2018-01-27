import React, { Component } from 'react';
import {Link} from 'react-router-dom';  
import {connect} from 'react-redux'
import {createUser} from '../ducks/reducer'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            username:""
        }
    }

createUser = () => {
    let {username} = this.state
}



    render() {
        return (
            <div>
                <Link to ='/nothome'>Not Home Page</Link>
            </div>
        );
    }
}

function mapStatetoProps (state){
    return {
        userData: state.userData,
        userID: state.userID

    }
}

export default connect( mapStatetoProps, {createUser}) (Home)