import React from 'react';
import { Activity, Unit } from '../utils/Enums';
import { 
    Intent,
    FormGroup, 
    InputGroup, 
    Radio, 
    RadioGroup, 
    Alignment
 } from "@blueprintjs/core";

const BmrCalculator = ({ weight, onChange, weightUnit, activityFactors }) =>  (
        <div>
            <p>Basal Metabolic Rate ( BMR )</p>
            <FormGroup
                disabled={false}
                helperText={ "weight"}
                inline={true}
                intent={Intent.PRIMARY}
                label={"Weight"}
                labelFor="text-input"
                labelInfo={"(required)"} >
                <InputGroup 
                    id = "text-input" 
                    name={'weight' }
                    value={weight} 
                    onChange={onChange} 
                    placeholder="Input your weight" 
                    disabled={false} 
                    intent={Intent.PRIMARY}  
                />
            </FormGroup>

            <RadioGroup
                inline={true}
                label='Weight Unit'
                name='weightUnit' 
                onChange={onChange}
                selectedValue={weightUnit}    
            >
                <Radio label={Unit.KGS} value={Unit.KGS} alignIndicator={Alignment.LEFT}/>
                <Radio label={Unit.POUNDS} value={Unit.POUNDS} alignIndicator={Alignment.LEFT} />
            </RadioGroup>
                
            <RadioGroup
                inline={true}
                label='Activity Factors'
                name='activityFactors' 
                onChange={onChange}
                selectedValue={activityFactors}    
            >
                <Radio label="Lightly Active" value={Activity.LIGHTLY} alignIndicator={Alignment.LEFT}/>
                <Radio label="Moderately Active" value={Activity.MODERATELY} alignIndicator={Alignment.LEFT} />
                <Radio label="Very Active" value={Activity.VERY} alignIndicator={Alignment.LEFT}/>
            </RadioGroup>
            
        </div>
)

export default BmrCalculator