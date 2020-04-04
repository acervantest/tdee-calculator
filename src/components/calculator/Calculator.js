import React, { Component } from 'react';
import { Activity, Pounds, Weight } from '../utils/Enums';
import MacroNutrients from '../macros/MacroNutrients';
import BmrCalculator from '../bmr/BmrCalculator';

export default class Calculator extends Component {

    constructor(props){
        super(props);
        
        this.state = { 
            weight: '',
            isPounds: Weight.POUNDS,
            weightInPounds: 0,
            factors: Activity.LIGHTLY,
            deficit: 2,
            goal: '',
            diet: 0, 
            caloricMaintenance: 0
        };      
    }

    _onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
            this.calculateCaloricMaintenance(); console.log(`_onChange : ${JSON.stringify(this.state)}`);
        });
    }

    getChangeHandler = (key) => { 
        return (value) => this.setState({ [key]: value }, () => { console.log(`getChangeHandler : ${JSON.stringify(this.state)}`); });
    }
    
    calculateCaloricMaintenance = () => { console.log(`IS_POUNDS? ${this.state.isPounds === Weight.POUNDS}`);
        let weightConverted = 0;//WEIGHT (will be returned in pounds) 

        if(this.state.isPounds === Weight.KGS && this.state.weight !== ''){//When WEIGHT provided in KGS
            
            weightConverted = (this.state.weight * Pounds.CONVERTER);

            this.setState({caloricMaintenance: (weightConverted * this.state.factors)}, () => {
                console.log(`caloricMaintenance(kgs): ${JSON.stringify(this.state)}`);
            });
            
        } else if(this.state.isPounds === Weight.POUNDS && this.state.weight !== ''){ //When WEIGHT provided in LBS
            weightConverted = this.state.weight;

            this.setState({caloricMaintenance: (this.state.weight * this.state.factors)}, () =>{
                console.log(`caloricMaintenance(lbs): ${JSON.stringify(this.state)}`);
            });
        }  
        //Set correct WEIGHT to Pounds 
        this.setState({ weightInPounds: weightConverted }, () => { console.log(`weight in pounds: ${this.state.weightInPounds}`) });
    }

    render(){
        return(
            <div>
                <BmrCalculator 
                    weight={this.state.weight} 
                    onChange={this._onChange}
                    isPounds={this.state.isPounds}
                    factors={this.state.factors}
                    deficit={this.state.deficit}
                    getChangeHandler={this.getChangeHandler('deficit')}
                />

                <MacroNutrients onChange={this._onChange} goal={this.state.goal} diet={this.state.diet} />
            </div>
        )
    }
}