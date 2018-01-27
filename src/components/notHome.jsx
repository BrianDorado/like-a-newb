import React, { Component } from 'react';
import {Link} from 'react-router-dom';  

class NotHome extends Component {
        constructor(){
            super() 
                this.state = {
                    urlParam:''
                }
        }
            handleChange = () => {
            this.setState ({
                urlParam: this.refs.param.value
            })
        }

    render() {
        return (
            <div>
                <Link to ='/'>Home</Link>
                <br/>
                <input type="text" ref ="param" onChange={this.handleChange}/> 
                <Link to ={`/farfrom/${this.state.urlParam}`}>Far Away</Link>
            </div>
        );
    }
}

export default NotHome;