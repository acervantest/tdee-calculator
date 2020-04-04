import React from 'react';
import { Button, Intent, FormGroup } from "@blueprintjs/core";
import Select from '../form_components/Select';

const GOALS = [
    'Select Your Goal',
    'Lose Weight', 
    'Maintain Weight', 
    'Gain Weight' ]

const DIET_PREFERENCES = [
    'Select Your Favourite Diet',
    'High Fats',
    'High Carbs' ]    

 const MacroNutrients = ({ goal, diet, onChange }) => {
        return(
            <div>
                <p>
                Macro Nutrients Dosage
                </p>

                <Select 
                    name={'goal'} 
                    value={goal} 
                    onChange={onChange}
                    options={GOALS} />

                <Select
                    name={'diet'} 
                    value={diet} 
                    onChange={onChange}
                    options={DIET_PREFERENCES} />  

                <FormGroup>
                    <Button intent={Intent.PRIMARY} text={'Calculate your TDEE'} />
                </FormGroup>
            </div>
        )   
}

export default MacroNutrients