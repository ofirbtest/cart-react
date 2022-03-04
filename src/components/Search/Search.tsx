import React, {useContext} from 'react';
import OutlinedInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {ShopContext} from "../../contexts/shopContext";
import { FilterType } from '../../types';

const Search = () => {
    const { setFilters, filters } = useContext(ShopContext);
    return (
        <OutlinedInput
            fullWidth
            onChange={event => setFilters({...filters, [FilterType.SearchTerm]: event.target.value})}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                        }}
                        edge="end"
                    >
                    </IconButton>
                </InputAdornment>
            }
            placeholder="Search Here"
        />
    );
};

export default Search;
