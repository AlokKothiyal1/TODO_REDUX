import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../Redux/app/actions'

class Todo extends React.Component{

    constructor(props){
        super(props)
            this.state={
                value:''
        }
    }

    render(){
        const { addTodo} =this.props
        const {value}=this.state
        return(

            <div>
                <h1>TODO LIST</h1>
                <input type='text' placeholder="Enter tasks " value={value} onChange={(e)=>this.setState({value:e.target.value})}></input>
                <button onClick={()=>addTodo(value)}>ADD</button>
            </div>

        )
    }
 
}

const mapDispatchToProps = dispatch=>({
    addTodo:(payload)=>dispatch(addTodo(payload))
})
 
export default connect(null,mapDispatchToProps)(Todo)