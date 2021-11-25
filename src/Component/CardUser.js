import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function CardUser({user}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {user.img} />
  <Card.Body>
    <Card.Title>  {user.name} </Card.Title>

    <Link  to={`/details/${user.id}`}  >   <Button variant="primary">Go somewhere</Button> </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default CardUser
