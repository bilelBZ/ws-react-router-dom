import React from 'react'

function Details(props) {
    console.log(props)

    const User= props.users.find(el=> el.id== props.match.params.id  )
    console.log(User)
    return (
        <div>
            <h1>{User.name}</h1>
            <h1>{User.adress}</h1>

            <button onClick={()=> props.history.goBack()}   >go back</button>
            <button  onClick={()=>props.history.push("/")}  >home</button>
        </div>
    )
}

export default Details
