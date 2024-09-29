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
            <div className="user-div mt-8">
                <h1 className="user-name text-3xl font-bold">{name}</h1>
                <h4 className="user-location text-xl font-medium">{location}</h4>
                <h3 className='text-xl mt-3 mb-2'>Likes: {count}</h3>
                <button className='p-2 bg-orange-500 text-white font-semibold mr-4' onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }} >Like</button>
                <button className='p-2 bg-orange-500 text-white font-semibold ' onClick={() => {
                    this.setState({
                        count: count > 0 ? count - 1 : count
                    })
                }}>Dislike</button>
            </div>
        )
    }
}

export default UserClass;