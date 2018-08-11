import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}){
    return(
                <Card>
                    <CardImg top src = {dish.image} alt= {dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        );
}

function RenderComments({comments}){
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
                 <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{this.props.dish.name}</h3>
                                <hr />
                            </div>                
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish dish={this.props.dish} />
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <RenderComments comments={this.props.comments} />
                            </div>
                        </div>
                        </div>
            );
        }
    }
}

export default DishDetail;

