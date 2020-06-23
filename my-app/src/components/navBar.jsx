import React , {Component} from 'react';
import Counter1 from './counters';

export class NavBar extends Component {
    
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a> <span>{this.props.totalCounters}</span>
            </nav> 
        );
    }
}

export default NavBar;