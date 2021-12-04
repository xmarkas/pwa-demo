import React from 'react';
import Holiday from '../images/holiday.gif';
import { Grid } from '@mui/material';
import FourTile from '../components/FourTile';
import InfoStripe from '../components/InfoStripe';
import BakedGoods from '../images/baked_goods.jpg';
import LeafCup from '../images/leaf-cup.jpg';
import FBicon from '../images/fb_logo.png';
import IGicon from '../images/ig_logo.png';

const Home = ({fireSnack}) => {
    let tiles = [{ top: "everywhere northwest", bottom: "20+ stands open!" },
        { image: LeafCup, position: "bottom" },
        { image: BakedGoods, position: "bottom" },
        { top: "food & snacks", bottom:"pastries, breakfast burritos, and more"}];


    return (
        <Grid container id="home">
            <Grid item id="special-bar">
                <img id="special-img" src={Holiday} alt="" />
                <div className="social-media-wrap">
                    <img src={FBicon} alt="" onClick={() => fireSnack("")}/>
                  <img src={IGicon} alt="" onClick={() => fireSnack("")}/>
              </div>
            </Grid>
            <InfoStripe />
            <FourTile tiles={tiles}/>
        </Grid>
    );
}

export default Home;