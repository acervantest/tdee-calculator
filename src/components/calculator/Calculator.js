import React, { Component } from 'react';
import { Activity, Pounds, Weight, Protein, Fat, CaloriesIn } from '../utils/Enums';
import MacroNutrients, { DIET_PREFERENCES, GOALS } from '../macros/MacroNutrients';
import BmrCalculator from '../bmr/BmrCalculator';

export default class Calculator extends Component {

    constructor(props){
        super(props);
        
        this.state = { 
            weight: '',
            isPounds: Weight.POUNDS,
            weightInPounds: 0,
            activityFactors: Activity.LIGHTLY,
            goal: '',
            diet: '', 
            caloricMaintenance: 0,
            proteinDosage: 0,
            fatDosage: 0,
            carbsDosage:0
        };      
    }

    _onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, async () => {
            await this.calculateCaloricMaintenance(); console.log(`_onChange : ${JSON.stringify(this.state)}`);
        });
    }
    
    calculateCaloricMaintenance = async () => {
        let weightConverted = this.state.weight;//WEIGHT (will be returned in pounds) 
        let weightIsSet = this.state.weight !== '';

        if(this.state.isPounds === Weight.KGS && weightIsSet){//When WEIGHT provided in KGS  
            weightConverted = (this.state.weight * Pounds.CONVERTER);

            this.setState({caloricMaintenance: (weightConverted * this.state.activityFactors)}, () => {
                console.log(`caloricMaintenance(kgs): ${JSON.stringify(this.state)}`);
            });
            
        } else if(this.state.isPounds === Weight.POUNDS && weightIsSet){ //When WEIGHT provided in LBS
            weightConverted = this.state.weight;

            this.setState({caloricMaintenance: (this.state.weight * this.state.activityFactors)}, () =>{
                console.log(`caloricMaintenance(lbs): ${JSON.stringify(this.state)}`);
            });
        }  
        //Set correct WEIGHT to Pounds 
        this.setState({ weightInPounds: weightConverted });
    }

    calculateProteinIntake = async () => { 
        let proteinIntake = 0;
        switch(this.state.activityFactors){
            case Activity.LIGHTLY:
                proteinIntake = this.state.weightInPounds * Protein.SEDENTARY;
                this.setState({proteinDosage: proteinIntake}, () => console.log(` lightly: ${JSON.stringify(this.state)}`));
                break;
            case Activity.MODERATELY:    
                proteinIntake = this.state.weightInPounds * Protein.ATHLETE;
                this.setState({proteinDosage: proteinIntake}, () => console.log(` moderately: ${JSON.stringify(this.state)}`));
                break;
            case Activity.VERY:
                proteinIntake = this.state.weightInPounds * Protein.COMPETITOR;
                this.setState({proteinDosage: proteinIntake}, () => console.log(` very: ${JSON.stringify(this.state)}`));
                break;
            default:
                console.log(`Sorry we are out of activity factors`);        
        }
    }

    calculateFatIntake = async () => {
        let fatIntake = 0;
        if(this.state.diet === DIET_PREFERENCES[1]){
            fatIntake = this.state.weightInPounds * Fat.CARBS;
            this.setState( {fatDosage: fatIntake}, () => { console.log(`calculateFatIntake : ${JSON.stringify(this.state)}`) });
        } else {
            fatIntake = this.state.weightInPounds * Fat.HIGH_FATS;
            this.setState( {fatDosage: fatIntake}, () => { console.log(`calculateFatIntake : ${JSON.stringify(this.state)}`) });
        }
    }

    calculateCarbsIntake = async (calories) => {
        const proteinCalories = this.state.proteinDosage * CaloriesIn.PROTEIN;
        const fatCalories = this.state.fatDosage * CaloriesIn.FAT;
        const totalCalories = proteinCalories + fatCalories;

        const availableCalories = calories - totalCalories;

        const carbsIntake = availableCalories / CaloriesIn.CARBS;
        
        this.setState({carbsDosage: carbsIntake}, () => { 
            console.log(`
                calories: ${calories}
                protein cals: ${proteinCalories}
                fats cals: ${fatCalories}
                total cals: ${totalCalories}
                available cals:  ${availableCalories}
            `)
            console.log(`calculateCarbsIntake: ${JSON.stringify(this.state)}`)
        })
    }

    calculateMacroNutrients = async () => {
        await this.calculateProteinIntake();

        await this.calculateFatIntake();
        
        let caloriesToCalculateCarbs = this.state.caloricMaintenance;
        
        if(this.state.goal === GOALS[1]){
            caloriesToCalculateCarbs -= 500;
        }

        if(this.state.goal === GOALS[3]){
            caloriesToCalculateCarbs += 500;
        }

        await this.calculateCarbsIntake(caloriesToCalculateCarbs);
    }

    render(){
        return(
            <div>
                <BmrCalculator 
                    weight={this.state.weight} 
                    onChange={this._onChange}
                    isPounds={this.state.isPounds}
                    activityFactors={this.state.activityFactors}
                />

                <MacroNutrients 
                    onChange={this._onChange} 
                    goal={this.state.goal} 
                    diet={this.state.diet} 
                    calculateMacros={this.calculateMacroNutrients}
                    weight={this.state.weight}
                />
            </div>
        )
    }
}