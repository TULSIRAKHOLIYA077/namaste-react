import User from "./User";
import UserClass from "./UserClass";
import React from "react";// or import {Component} from "react";

//class based component
class About extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1>About</h1>
        <h2>This is React Web Series</h2>
        <User name={"Tulsi (function)"}/>
  
        <UserClass name={"Tulsi (class)"} location={"Dehradun class"}/>
        <UserClass name={"Musk (class)"} location={"Dehradun class"}/>
      </div>
    )
  }
}

//function component
/*
const About = ()=>{
  return(
    <div>
      <h1>About</h1>
      <h2>This is React Web Series</h2>
      <User name={"Tulsi (function)"}/>

      <UserClass name={"Tulsi (class)"} location={"Dehradun class"}/>
    </div>
  )
}
*/

export default About;