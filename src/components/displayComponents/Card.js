import React from 'react';
import { Card, Elevation, H2 } from "@blueprintjs/core";

export const CArd = ({ title, content}) => (
    <Card interactive={true} elevation={Elevation.ONE}>
        <H2>{content}</H2>
        <p>{title}</p>
    </Card>
)  

export default CArd;