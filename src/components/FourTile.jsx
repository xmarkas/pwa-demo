import React from 'react';
import { Grid } from '@mui/material';
import TileCards from './TileCards';

const FourTile = ({tiles}) => {

    return (
        <Grid container className="four-tile">
            {tiles && tiles.map((card, index) => {
                
                return <TileCards key={index} message={card} />
            })}
        </Grid>
    );
}

export default FourTile;