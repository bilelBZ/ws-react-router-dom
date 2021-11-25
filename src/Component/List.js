import React from 'react'
import CardUser from './CardUser'

function List({users}) {
    return (
        <div  style={{display:'flex', justifyContent:'space-around' , marginTop:"30px"}}  >
            {users.map(user=> <CardUser  user={user} key={user.id}   />  )}
        </div>
    )
}

export default List
