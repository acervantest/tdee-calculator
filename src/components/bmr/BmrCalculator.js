import React from 'react';
import { Activity, Weight } from '../utils/Enums';
import { 
    Intent,
    FormGroup, 
    InputGroup, 
    Radio, 
    RadioGroup, 
    Alignment
 } from "@blueprintjs/core";

const BmrCalculator = ({ weight, onChange, isPounds, activityFactors }) =>  (
        <div>
            <p>
                Basal Metabolic Rate ( BMR )
            </p>
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
                label='Units'
                name='isPounds' 
                onChange={onChange}
                selectedValue={isPounds}    
            >
                <Radio label="Kgs" value={Weight.KGS} alignIndicator={Alignment.LEFT}/>
                <Radio label="Lbs" value={Weight.POUNDS} alignIndicator={Alignment.LEFT} />
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