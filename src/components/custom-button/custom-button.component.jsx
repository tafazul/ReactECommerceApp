import React from 'react';
import {CustomButtonContainer} from './cutom-button.styles';

const CustomButton = ({children, ...otherProps}) => (
    <CustomButtonContainer {...otherProps}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;