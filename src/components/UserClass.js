import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // this is the way to define state variables in Class based components
        this.state = {
            count: 0
        }
        console.log(this.props.name + " Child Constructor");
    }

    // Called after the component has been mounted successfully.
    componentDidMount() {
        console.log(this.props.name + " Child Component Did Mount");
    }

    componentDidUpdate() {
        console.log(this.props.name + " Child Component Did Update");
    }

    render() {
        const { name, location } = this.props;
        const { count } = this.state;

        console.log(this.props.name + " Child Render");
        return (
            <div className="user-div">
                <h1 className="user-name">{name}</h1>
                <h4 className="user-location">{location}</h4>
                <h3>Likes: {count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }} >Like</button>
                <button onClick={() => {
                    this.setState({
                        count: count > 0 ? count - 1 : count
                    })
                }}>Dislike</button>
            </div>
        )
    }
}

export default UserClass;