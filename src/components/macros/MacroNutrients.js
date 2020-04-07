import React from 'react';
import { Button, Intent, FormGroup } from "@blueprintjs/core";
import Select from '../form_components/Select';

export const GOALS = [
    'Select Goal',
    'Lose Weight', 
    'Maintain Weight', 
    'Gain Weight' ]

export const DIET_PREFERENCES = [
    'Select Favourite Diet',
    'High Fats',
    'High Carbs' ]    

 const MacroNutrients = ({ goal, diet, onChange, calculateMacros, weight }) => {
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
                    <Button 
                        intent={Intent.SUCCESS} 
                        text={'Calculate Macro Nutrients'} 
                        onClick={() => calculateMacros()} 
                        disabled={(
                            weight === '' || 
                            goal === '' || 
                            goal === GOALS[0] || 
                            diet === '' || 
                            diet === DIET_PREFERENCES[0])}
                    />
                </FormGroup>
            </div>
        )   
}

export default MacroNutrients