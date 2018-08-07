import React, { Component } from 'react';
import { Card,CardImg,CardBody,CardTitle,CardText,CardImgOverlay} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };      
    }

      render(){
        const dish = this.props.dish;
        if(dish == null){
            return (
                <div></div>
            );
        } else{
            return(
                 <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }
}

export default DishDetail;

