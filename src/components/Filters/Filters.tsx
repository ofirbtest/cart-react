import {Box, Checkbox, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material';
import React, {useContext} from 'react';
import {ShopContext} from "../../contexts/shopContext";
import {FilterType} from "../../types";

const Filters = () => {
    const {setFilters, filters} = useContext(ShopContext);

    const handleChange = (filterType: FilterType, value: number | boolean) => {
        setFilters({...filters, [filterType]: value})
    }

    return (
        <div>
            <Typography variant="subtitle1">Quick Filters</Typography>
            <Box sx={{pt: 2}}>
                <Typography variant="subtitle2">By Price:</Typography>
                <FormControlLabel
                    onChange={(event) => handleChange(FilterType.Below100, (event.target as HTMLInputElement).checked)}
                    control={<Checkbox/>} label="Below 100"/>
                <FormControlLabel
                    onChange={(event) => handleChange(FilterType.Over200, (event.target as HTMLInputElement).checked)}
                    control={<Checkbox/>} label="Over 200"/>
            </Box>
            <div>
                <Typography variant="subtitle2">Rating Over:</Typography>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                >
                    {[1, 2, 3, 4, 5].map((rating) => <FormControlLabel onChange={(event) => handleChange(FilterType.Rating, +(event.target as HTMLInputElement).value)} key={rating} value={rating} control={<Radio/>}
                                                                       label={rating}/>)}
                </RadioGroup>
            </div>
        </div>
    );
};

export default Filters;
