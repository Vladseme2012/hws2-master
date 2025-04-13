import React from 'react';
import {Slider, SliderProps} from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{width: 250}}
            {...props}
        />
    );
};

export default SuperRange;
