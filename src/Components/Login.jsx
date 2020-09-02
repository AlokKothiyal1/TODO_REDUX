import React from 'react'
import {connect} from'react-redux'
import {authSuccess} from '../Redux/auth/action'

class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        const {authSuccess}=this.props
        const {email,password}=this.state
        return (
            <>
                <h1>Login!</h1>
                <input type="email" name="email" placeholder="email" onChange={this.handleChange}></input>
                <br></br>
                <br></br>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange}></input>
                <br></br>
                <br></br>
                <button onClick={()=>authSuccess(email,password)}>Login!</button>
            </>
        )
    }

}


const mapDispatchToProps = dispatch =>({

    authSuccess:(email,pwd)=>dispatch(authSuccess(email,pwd))
})

export default connect(null,mapDispatchToProps)(Login)