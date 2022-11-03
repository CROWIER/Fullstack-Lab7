import  { Component } from "react";

class MyInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Askar Bulabayev",
            stdId: 101322619,
            college: "George Brown College",
            city: "Toronto"
        };
    }
    render() {
        return (
            <div>

                <p>
                    Student ID - {this.state.stdId} <br/>
                    Student Name - {this.state.name} <br/>
                    {this.state.college}, {this.state.city}
                </p>
            </div>
        );
    }
}

export default MyInfo;