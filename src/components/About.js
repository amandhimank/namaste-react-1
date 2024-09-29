import User from "./User"
import UserClass from "./UserClass"
import React from 'react';

class About extends React.Component {
    // First constructor() is called as soon as the component class is instantiated
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    
    // Called after the component has been mounted successfully.
    componentDidMount() {
        // API Call
        console.log("Parent Component Did Mount");
    }

    componentWillUnmount() {
        console.log("Parent Component Did Unmount");
    }
    
    // secondly render() is called after the constructor has been called and executed.
    render() {
        console.log("Parent Render");
        return (
            <div className="about-container p-10">
                <h1 className="about-title text-5xl font-semibold text-orange-500">About Us</h1>
                {/* <User name={"Akshay Saini {Functional}"} location={"Dehradun"} /> */}
                <UserClass name={"Class 1"} location={"Delhi"} />
                <UserClass name={"Child 2"} location={"Mumbai"} />
            </div>
        )
    }
}

export default About;