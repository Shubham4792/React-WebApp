import React, { Component } from 'react';

import { DISHES } from '../shared/dishes.js';
import { COMMENTS } from '../shared/comments.js';
import { PROMOTIONS } from '../shared/promotions.js';
import { LEADERS } from '../shared/leaders.js';

import Menu from './MenuComponent.js';
import DishDetail from './DishDetailComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Contact from './ContactComponent.js';
import Home from './HomeComponent.js';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS,
    };
  }

  render() {
    const HomePage = ()=> {
      return (
          <Home dish = {this.state.dishes.filter((dish) => dish.featured === true)[0]}
                promotion = {this.state.promotions.filter((promotion) => promotion.featured === true)[0]}
                leader = {this.state.leaders.filter((leader) => leader.featured === true)[0]}
          />
        );
    }

    const DishWithId = ({match})=> {
        return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    }

    return (
       <div>
        <Header/>
        <Switch>
          <Route path = "/home" component = {HomePage}/>
          <Route exact path = "/contactus" component = {Contact}/>
          <Route exact path = "/menu" component = { () => <Menu dishes = {this.state.dishes}/>}/>
          <Route path = "/menu/:dishId" component = {DishWithId}/>
          <Redirect to = "/home"/> 
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
