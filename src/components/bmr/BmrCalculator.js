import React from 'react';
import { Activity, Weight } from '../utils/Enums';
import { 
    Intent,
    FormGroup, 
    InputGroup, 
    Radio, 
    RadioGroup, 
    Alignment,
    Label, 
    Slider } from "@blueprintjs/core";

const BmrCalculator = ({ weight, onChange, isPounds, factors, deficit, getChangeHandler }) =>  (
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
            </FormGroup>

            <RadioGroup
                inline={true}
                label='Activity Factors'
                name='factors' 
                onChange={onChange}
                selectedValue={factors}    
            >
                <Radio label="Lightly Active" value={Activity.LIGHTLY} alignIndicator={Alignment.LEFT}/>
                <Radio label="Moderately Active" value={Activity.MODERATELY} alignIndicator={Alignment.LEFT} />
                <Radio label="Very Active" value={Activity.VERY} alignIndicator={Alignment.LEFT}/>
            </RadioGroup>
            
            <Label htmlFor='input-goal'>Caloric Deficit</Label>
            <Slider
                id='input-goal'
                name='goal'
                min={0}
                max={10}
                stepSize={1}
                labelStepSize={1}
                onChange={getChangeHandler}
                labelRenderer={true}
                value={deficit}
                vertical={false}
            />
        </div>
)

export default BmrCalculator