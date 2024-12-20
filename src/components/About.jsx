import User from "./User";
import UserClass from "./UserClass";
import React from "react";// or import {Component} from "react";
import UserContext from "../utils/UserContext";

//class based component
class About extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="">
        <img className="relative w-full h-auto object-cover" src="https://images.indianexpress.com/2024/03/processed-food.jpg" alt="" />
        <div className="absolute top-28 left-0 right-0 bottom-0  h-[116%]  bg-gradient-to-r from-black to-black opacity-50"></div>
        <h1 className="absolute  top-80 mx-10 text-white text-6xl font-bold">About <br /> Services</h1>
        <div className="m-20 w-2/3">
          <h1 className="text-slate-800 font-bold text-5xl">From food delivery to your <br /> daily convenience companion. </h1>
          <p className="text-slate-600 my-6 text-lg">
          A subsidiary of Delivery Hero, this company launched in Singapore in 2014 as a food delivery platform.  Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of customers in APAC. <br /> <br />

          Powered by tech and operational excellence, this company has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar. 
          <br /> <br />

          Thanks to dedicated partners, riders, and a team united by shared values,  this company is now providing millions with a convenient way to get food and groceries in a few taps.
          </p>
        </div>
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