import React from 'react';
import { Button, Intent, FormGroup } from "@blueprintjs/core";
import Select from '../form_components/Select';
import { Goal, Diet } from '../utils/Enums';

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
                    options={Object.keys(Goal)} />

                <Select
                    name={'diet'} 
                    value={diet} 
                    onChange={onChange}
                    options={Object.keys(Diet)} />  

                <FormGroup>
                    <Button 
                        intent={Intent.SUCCESS} 
                        text={'Calculate Macro Nutrients'} 
                        onClick={() => calculateMacros()} 
                        disabled={(
                            weight === '' || 
                            goal === '' || 
                            goal === Object.keys(Goal)[0] || 
                            diet === '' || 
                            diet === Object.keys(Diet)[0])}
                    />
                </FormGroup>
            </div>
        )   
}

export default MacroNutrients