//let's write class based component
import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        //creating state
        // this.state = {
        //     count: 0, //1st state variable
        //     count2: 0,
        // };
        this.state={
            userInfo:{
                name:"Dummy Name",  //can keep it empty
                location:"Dummy Location",
            },
        }
        console.log('Child constructor');
    }
    /* 
        why are we talking about constructor ? - for using state in class
        Where did this props come in class ?
        React uses this syntax no need to worry
    */

 async componentDidMount() {
        // Best place for API calls
        
        const data = await fetch('https://api.github.com/users/heygogu');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
        console.log('Child componentDidMount called');  
    }

    componentDidUpdate(){
        console.log("Child componentDidUpdated");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }
    render() {
        console.log('Child render');
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h3>Name: {this.state.userInfo.name}</h3>
                <h3>Location: {this.state.userInfo.location}</h3>
                {/* <button
                    onClick={() => {
                        this.setState({
                            count: 1,
                            count2: 2,
                        });
                    }}>
                    Click Class Count
                </button> */}
            </div>
        );
    }
}
export default Profile;
