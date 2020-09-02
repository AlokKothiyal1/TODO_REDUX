import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../Redux/app/actions'

function List(props){

    const {todo,removeItem}= props
    

    return(
        <>
            <div>
                {
                    todo.map(item=>(
                        
                    <div key={item.id}>
                        <div >{item.name}
                        <button onClick={()=>removeItem(item.id)}>X</button>
                        </div>
                    </div>
                    
                    ))
                }
            </div>
        </>
    )
}
const mapStateToProps = state=>({
    todo:state.app.todo
})

const mapDispatchToProps = dispatch=>({
    removeItem:(id)=>dispatch(removeTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(List)