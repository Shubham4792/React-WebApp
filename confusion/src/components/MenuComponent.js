import React, { Component } from 'react';
import { Card,CardImg,CardBody,CardTitle,CardText,CardImgOverlay} from 'reactstrap';
import DishDetail from './DishDetailComponent.js';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedDish : []	
        };  

        console.log("Menu Component constructor invoked");      
    }


     onDishSelect (dish){
        	this.setState({selectedDish : dish});
    }


    componentDidMount(){
    	console.log("Menu Component componentDidMount invoked");
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key = {dish.id} onClick = {() => this.onDishSelect(dish)}>
                  <CardImg width ="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
		
		console.log("Menu Component render invoked");

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <DishDetail dish = {this.state.selectedDish}/>
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;