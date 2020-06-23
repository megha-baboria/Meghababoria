import React , {Component} from 'react';
class Counter extends Component {
    state = {
        
        imageUrl : 'https://picsum.photos/200',
        tags : []
    };
    styles = {
        fontSize : 40,
        fontWeight : 'bold'
    };
    
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    formatCount(){
        const {value} = this.props.counter;
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    };

    // renderTags(){
    //     if (this.state.tags.length == 0) return "No tag available"
    //     return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
    // }

    // handleIncrement = (product) => {
    //     console.log(product)
    //     this.setState({value : this.props.value + 1 });
    // };

    // doHandleIncrement = () => {
    //     this.handleIncrement({id : 1})
    // }
    render() {
        
        return (
            <React.Fragment>
                {this.props.children}
                {/* {this.state.tags.length === 0 && "Create some new tags"} */}
                {/* <ul>
                    {this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}
                </ul> */}
                <div>
                    <img src = {this.state.imageUrl} alt = ""/>
                    <span style = {this.styles}> {this.formatCount()} </span>
                    <button onClick = {() => this.props.OnIncrement(this.props.counter)}> Increment </button>
                    <button onClick = {() => this.props.OnDelete(this.props.counter.id)}>Delete</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Counter;