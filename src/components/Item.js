import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const ItemExampleLink = (props) => (
  <ListGroup>
    {props.category.map(item=>(
    <ListGroupItem key={item.id}>
        <ListGroupItemHeading>{item.id}. {item.name}   -    ${item.price}</ListGroupItemHeading>
        <ListGroupItemText>{item.description}</ListGroupItemText>
    </ListGroupItem>
    ))}
  </ListGroup>
)

export default ItemExampleLink
