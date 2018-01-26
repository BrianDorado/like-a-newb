import React, { Component } from 'react';
import {Link} from 'react-router-dom';  

class NotHome extends Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
        }
    render() {
        return (
            <div>
                <Link to ='/'>Home</Link>
                <br/>
                <Link to ={`/farfrom/${1}`}>Far Away</Link>
            </div>
        );
    }
}

export default NotHome;