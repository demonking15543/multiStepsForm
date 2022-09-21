import React, { Component } from 'react'
import Confirmation from './Confirmation'
import PersonalDetails from './PersonalDetails'
import Success from './Success'
import UserDetails from './UserDetails'


export default class Signup extends Component {
    
    state={
        step:1,
        name:"",
        email:"",
        password:"",
        country:"",
        levelOfEducation:""

    }


    // will take the user to the previous step (if clicked)


    prevStep = () =>{
        const { step } = this.state;
        this.setState({step: step - 1});
    }


    // will take the user to the next step (if clicked)

    nextStep = () =>{
        const { step } = this.state;
        this.setState({step: step + 1});
    }

    // Handle The Field Change
    handleChange = input => event =>{
        this.setState({[input]: event.target.value});

    }
   render() {

    const { step }=this.state;
    const { email, name, password, country, levelOfEducation } = this.state;
    const values={ email, name, password, country, levelOfEducation } 
      

    switch (step) {
        case 1:
            
            return (
                <UserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values} />
              )
        case 2:
    
          return (
              <PersonalDetails
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values} />
            )


        case 3:
        
            return (
                <Confirmation
                prevStep={this.prevStep}

                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values} />
              )
        case 4:
            return (
                <Success/>
            )
        default:
            // do something    

                   
                 
          
    }
  }
}
