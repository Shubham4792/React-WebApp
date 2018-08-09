import React, { Component } from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : []
        };      
    }

    componentDidMount(){
        console.log("DishDetail componentDidMount invoked");
    }

    componentDidUpdate(){
        console.log("DishDetail componentDidUpdate invoked");
    }

    renderComments(comments){
        if(comments == null){
            return (
                <div></div>
            );
        } else{
            const commentss = comments.map((ind) => {
                const dat = new Intl.DateTimeFormat('en-US', 
                        { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(ind.date)));
            return (
                <div key={ind.id}>
                        <div className="m-3">{ind.comment}</div>
                        <div className="m-3">-- {ind.author}, {dat}</div>
                </div>
            );
        });
            return (
                <div>
                    <h4> Comments</h4>
                    {commentss}
                </div>
            ); 
        }
    }

    render(){
        const dish = this.props.dish;
        if(dish == null){
            return (
                <div></div>
            );
        } else{
            return(
            <div className="container">
              <div className="row">

                <div  className="col-12 col-md-5 m-1">
                  <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>
                </div>

                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
              </div>
            </div>
            );
        }
    }
}

export default DishDetail;

