import React, { Component } from 'react';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Wrap from "../../hoc/Wrap";

const INGREDIENT_PRICES =  {
    salad:  0.5,
    cheese: 0.4,
    meat:   1.3,
    bacon:  .7
  };

class BurgerBuilder extends Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {...props};
    // };
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    addIngredientHandler =
        (type) => {
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount + 1;
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;
            this.setState(
                {
                    totalPrice:  newPrice,
                    ingredients: updatedIngredients
            });
            this.updatePurchaseState(updatedIngredients);
        }

    removeIngredientHandler =
    (type) => {
            const oldCount = this.state.ingredients[type];
            if( oldCount <= 0) return;
            const updatedCount = oldCount - 1;
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = updatedCount;
            const priceDedution = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDedution;
            this.setState(
                {
                    totalPrice:  newPrice,
                    ingredients: updatedIngredients
            });
            this.updatePurchaseState(updatedIngredients);
      
    };


    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };


    purchaseContinueHandler = () => {
        alert('Purchase continues now...');
    };


    purchaseHandler = () => {
        this.setState({purchasing: true});
    };


    updatePurchaseState(ingredients){
        const sum = Object
            .keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el) => { return sum + el;},0);
        this.setState({purchasable: sum>0});
    };

    render () {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0;

        return (
            <Wrap>
                <Modal
                    modalClosed={this.purchaseCancelHandler}
                    show={this.state.purchasing}
                >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    disabled={ disabledInfo }
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    ordered={this.purchaseHandler}
                    price = { this.state.totalPrice }
                    purchasable={ this.state.purchasable }
                    />
            </Wrap>
        );
    }
};

export default BurgerBuilder;
