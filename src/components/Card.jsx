import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant='primary'>Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
