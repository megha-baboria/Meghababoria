import React , {Component} from 'react';
import Counter from './counter';

export class Counter1 extends Component {
    
    render() {
        return (
            <div>
                <button onClick = {this.props.OnReset}>Reset</button>
                {this.props.counters.map(counter => <Counter key = {counter.id}  OnDelete = {this.props.OnDelete}  counter = {counter} OnIncrement = {this.props.OnIncrement}>
                        <h1>Counter # {counter.id}</h1>
                    </Counter>)}
            </div>
            
        );
    }
}

export default Counter1;