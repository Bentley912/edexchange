import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ExCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="images/ladyExpert.png" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Expert: </CardTitle>
          <CardSubtitle>Name: Card </CardSubtitle>
          <CardText>Skill: </CardText>
          <Button>Email</Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default ExCard;