import React from 'react'
import { connect } from 'react-redux'

function Total(props){
    return (
        <h1>
            Total Items {props.total}
        </h1>
    )
}

const mapStateToProps=(state)=>({
    total:state.app.total
})
export default connect(mapStateToProps,null)(Total)