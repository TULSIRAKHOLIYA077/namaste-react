import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInfo:{
        name: "Dummy",
        location: "Default"
      }
    }

    console.log(props);
    
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/TULSIRAKHOLIYA077");

    const json = await data.json();

    this.setState({
      userInfo : json
    });

    console.log(json);
    
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
    
  }

  render(){
    const { location} = this.props;
    const {id, avatar_url} = this.state.userInfo;


    return (
      <div className="user-card">
        {/* <h1>Count: {this.state.count}</h1> */}
        <img src={avatar_url} alt="" />
        <h2>Name: {id}</h2>
        <h3>Location: {location}</h3>
        {/* <h3>Location: {this.props.location}</h3> */}
        <h4>Contact: @tulsimarch7</h4>
      </div>
    )
  }
}

export default UserClass;