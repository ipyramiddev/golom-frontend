import * as React from 'react';
import { Box, Typography, Grid } from "@mui/material";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import book from "../assets/book.svg";
import pin from "../assets/pin.svg";
import box from "../assets/box.svg";
import laugh from "../assets/laugh.svg";
import gandalf from "../assets/gandalf.svg";
import logo from "../assets/logo.svg";
import icon2 from "../assets/icon2.svg";

import './style.css';

export default function Footer() {
    return (
        <Box className="footer">
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <Box className="footer-items">
                        <img src={twitter} alt="twitter" width="30px" />
                        <Typography sx={{paddingLeft:"10px"}}>Twitter</Typography>
                    </Box>
                    <Box className="footer-items">
                        <img src={discord} alt="discord" width="30px" />
                        <Typography sx={{paddingLeft:"10px"}}>Discord</Typography>
                    </Box>
                    <Box sx={{textAlign:"left", mt:"150px"}}>
                        <Typography>© Golom.io</Typography>
                        <Typography>1.6.0</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className="footer-items">
                        <img src={book} alt="book" width="30px" />
                        <Typography sx={{paddingLeft:"10px"}}>About</Typography>
                    </Box>
                    <Box className="footer-items">
                        <img src={logo} alt="logo" width="30px" />
                        <Typography sx={{paddingLeft:"10px"}}>Listings</Typography>
                    </Box>
                    <Box className="footer-items">
                        <img src={icon2} alt="icon2" width="30px" />
                        <Typography sx={{paddingLeft:"10px"}}>Collections</Typography>
                    </Box>
                    <Box className="footer-items">
                        <img src={box} alt="box" width="30px" />
                        <Typography sx={{paddingLeft:"10px"}}>Golom SDK</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className="footer-items">
                        <img src={laugh} alt="laugh" width="30px" />
                        <Typography sx={{paddingLeft:"10px"}}>FAQ</Typography>
                    </Box>
                    <Box className="footer-items">
                        <img src={pin} alt="pin" width="30px" />
                        <Typography sx={{paddingLeft:"10px"}}>Terms of Services</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <img src={gandalf} alt="gandalf" width="200%" style={{marginLeft:"-100px"}} />
                </Grid>
            </Grid>
        </Box>
    );
}